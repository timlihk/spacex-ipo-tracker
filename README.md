# SpaceX-IPO-Tracker

> Daily AI-managed stock research on SpaceX IPO beneficiaries. **Multi-agent LLM Bull/Bear/Judge** + 9 ML technical signals. Publicly auditable from 2026-05-12 through SpaceX IPO settlement.

## Why this exists

SpaceX confidentially filed S-1 on **2026-04-01**. Public S-1 expected **5/15-5/22**, roadshow **6/8**, target valuation **\$1.75-2T** — possibly the largest IPO in history. The 6-week window between filing and listing is the largest single retail-tradable AI/space catalyst of the decade.

Every popular YouTuber + Twitter newsletter is pushing "SpaceX beneficiary" stock picks during this window. **None of them publish their actual decision log**. They tell you their winners after the fact.

This tracker does the opposite:

- 8 ticker watchlist of pure SpaceX-pure-play (small/mid-cap) — **not** the usual Mag-7 noise
- Daily multi-agent LLM decision: Bull / Bear / Judge, plus technical signal overlay (RSI, MACD, MA stack, ADX, Bollinger Bands)
- Markdown brief auto-published every NY 14:00 ET to this repo + GitHub Pages
- **Brier-score audit** after SpaceX lists — every decision is judged against ground truth

If the AI is full of it, you'll see it. If the system has alpha, you'll see that too.

## The watchlist

| Ticker | Company | SpaceX relationship |
|---|---|---|
| **RKLB** | Rocket Lab USA | Small-sat launch competitor + customer of Falcon 9 |
| **ASTS** | AST SpaceMobile | Direct competitor to Starlink Direct-to-Cell |
| **LUNR** | Intuitive Machines | Lunar landers, Falcon 9 primary launch vehicle |
| **BKSY** | BlackSky Technology | SAR earth observation, launches on Falcon 9 |
| **PL** | Planet Labs | Earth observation constellation, SpaceX rideshare customer |
| **RDW** | Redwire | Space infrastructure components, supplies solar arrays to SpaceX |
| **LMT** | Lockheed Martin | Legacy aerospace, partial SpaceX competition + DoD shared-supplier role |
| **LIN** | Linde | Industrial gas supplier (LOX, LH2) — SpaceX rocket fuel |

**Not in the watchlist**: GOOGL, NVDA, MSFT, AMZN, IBM, TSLA. Those are Mag-7 / mega-caps where SpaceX exposure is a rounding error or already priced in. This tracker is specifically about pure-play small-cap signal.

## Narrative pillars

Each daily brief is read through long-form theses, not just same-day technicals. New theses get added when a piece of writing genuinely reframes the basket.

- **Space-based data centers for agentic inference** — Ben Thompson, ["The SpaceX IPO and Data Centers in Space"](https://stratechery.com/2026/the-spacex-ipo-and-data-centers-in-space/), Stratechery 2026-05-27 (free). Argument: terrestrial zoning + capacity constraints will push agentic inference workloads off the planet. If true, the LMT / RKLB / RDW positioning shifts from "SpaceX customer" to "orbital DC supplier" — a strictly larger TAM than launch services. Watch: any LMT or RDW design-win mention of "space data center" or "orbital edge compute" gets flagged in the catalyst column.

## How the daily brief is produced

```
NY 14:00 ET, every trading day:
─────────────────────────────────────────
1. Fetch yfinance OHLCV + technicals for 8 tickers
2. Compute 9 signal scores (RSI / MACD / MA stack / ADX / BB% / etc)
3. Build per-ticker context bundle
4. Claude Sonnet 4.6 makes Bull / Bear / Judge call
   → returns p(up), p(down), recommendation, risk level
5. Rank by (p_up - p_down) signal direction
6. Write Markdown brief to briefs/YYYY-MM-DD.md
7. Auto-commit + push to this repo
```

System architecture: [Orallexa](https://github.com/alex-jb/orallexa-ai-trading-agent) — a multi-agent stock-trading bot built solo over 2025-2026.

Cost: ~\$0.08/day in Claude API + free yfinance + free GitHub Actions. ~**\$2/month** all-in.

## The honest rules

1. **This is not financial advice.** I'm a software engineer publishing my AI system's outputs. Not a registered advisor. Not selling any service. Don't trade based on this.
2. **No real money is involved.** I am NOT trading these tickers based on this system. Phase 0 is paper-track only.
3. **The system is wrong sometimes.** That's the point of public audit.
4. **No selection bias.** Every daily brief is published regardless of decision. If the system says "all WAIT", I publish "all WAIT".
5. **Brier score is the ground truth.** Post-IPO (late June / early July), I'll compute Brier scores for every prediction. If LLM Brier > market-implied baseline → has alpha. If not → doesn't.

## Read today's brief

[`briefs/2026-05-12.md`](briefs/2026-05-12.md) — first day (Tue, 2026-05-12).

Every subsequent trading day adds a new file. Subscribe via RSS or GitHub watch.

## Methodology — academic version

For anyone wanting to reproduce:

- **Decision schema**: 3-class (BUY / SELL / WAIT) + probability triplet (p_up, p_neutral, p_down) + confidence ∈ \[0, 82\] + risk_level (LOW / MEDIUM / HIGH)
- **Confidence gate**: Auto-trade fires only at conf ≥ 60%. Phase 0 (this tracker): NEVER auto-trades. Pure observation.
- **Technical features**: yfinance daily bars → RSI(14), MACD(12,26,9), MA20/MA50, BB%(20,2), ADX(14), volume ratio vs 20d avg
- **LLM overlay**: Sonnet 4.6 receives the technical score (0-100) + 60d price history summary + asks "what's your verdict including base-rate calibration"
- **Calibration check**: A 60% confidence prediction should resolve correctly 6/10 historical times. Brier score audits this directly

## Project history

This tracker is part of [Solo Founder OS](https://github.com/alex-jb/solo-founder-os) — a 10-agent OSS Python stack for one-person companies. Built by [@alex-jb](https://github.com/alex-jb).

The companion [Orallexa](https://github.com/alex-jb/orallexa-ai-trading-agent) trading bot (which produces these briefs) ships 9 ML models, LangGraph Bull/Bear debate, Alpaca paper-trading executor, and a Critic agent (5th voice) for catching same-source bias in the debate chain.

## Disclaimers

- Personal research project. Not affiliated with SpaceX, Polymarket, Alpaca, Anthropic, or any company mentioned.
- Past performance of the AI system does not predict future performance.
- Daily briefs may contain hallucinated facts. They are LLM outputs and inherit all LLM limitations.
- If you build a trade on top of this and lose money, that's on you. Read rule 1.

## License

MIT. Briefs, methodology, source code all open.
