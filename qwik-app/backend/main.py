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
        "per_page": 100,
        "page": 1,
        "sparkline": "false"
    }, timeout=10)

    data = response.json()

    return [{
        "id": c.get("id"),
        "name": c.get("name"),
        "symbol": c.get("symbol"),

        "price": c.get("current_price"),
        "image": c.get("image"),

        "change24h": c.get("price_change_percentage_24h"),

        "marketCap": c.get("market_cap"),
        "marketCapRank": c.get("market_cap_rank"),

        "high24h": c.get("high_24h"),
        "low24h": c.get("low_24h"),
    } for c in data]


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

    return {
        "all": data,

        "top_gainers": sorted(
            data,
            key=lambda x: x["change24h"] or 0,
            reverse=True
        )[:5],

        "top_marketcap": sorted(
            data,
            key=lambda x: x["marketCap"] or 0,
            reverse=True
        )[:5],

        "top_movers": sorted(
            data,
            key=lambda x: abs(x["change24h"] or 0),
            reverse=True
        )[:5],
    }