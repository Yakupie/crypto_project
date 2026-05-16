from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import time

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

CACHE = {
    "data": None,
    "timestamp": 0
}

CACHE_DURATION = 30


def fetch_coins():
    url = "https://api.coingecko.com/api/v3/coins/markets"

    response = requests.get(url, params={
        "vs_currency": "usd",
        "order": "market_cap_desc",
        "per_page": 250,
        "page": 1,
        "sparkline": "false"
    }, timeout=10)

    data = response.json()

    result = []

    for c in data:

        price = c.get("current_price") or 0
        volume = c.get("total_volume") or 0
        market_cap = c.get("market_cap") or 0

        pe_proxy = None
        if volume > 0:
            pe_proxy = round(market_cap / volume, 2)

        result.append({
            "id": c.get("id"),
            "name": c.get("name"),
            "symbol": c.get("symbol"),
            "image": c.get("image"),

            "price": price,
            "change24h": round(c.get("price_change_percentage_24h") or 0, 2),
            "marketCap": market_cap,
            "volume": volume,

            "peRatio": pe_proxy,

            "marketCapRank": c.get("market_cap_rank"),
        })

    return result


def get_data():
    if CACHE["data"] and time.time() - CACHE["timestamp"] < CACHE_DURATION:
        return CACHE["data"]

    data = fetch_coins()

    CACHE["data"] = data
    CACHE["timestamp"] = time.time()

    return data


@app.get("/coins")
def coins():
    data = get_data()

    gainers = sorted(data, key=lambda x: x["change24h"], reverse=True)[:5]
    losers = sorted(data, key=lambda x: x["change24h"])[:5]
    movers = sorted(data, key=lambda x: abs(x["change24h"]), reverse=True)[:5]
    marketcap = sorted(data, key=lambda x: x["marketCap"], reverse=True)[:5]

    return {
        "all": data,
        "top_gainers": gainers,
        "top_marketcap": marketcap,
        "top_movers": movers,
        "top_losers": losers,
    }