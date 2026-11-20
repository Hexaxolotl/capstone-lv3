
# Your App's Name
To Be Played (TBP)

## The problem
To Be Played (TBP) solves gaming backlog overwhelm by giving players a fast, clutter-free ledger to search thousands of titles, queue up what to play next, and track the games they've actually finished.

## Persona
- Name and situation: Casual & PC/Console Gamer. Buys games during seasonal sales, gets recommendations from friends, and plays across multiple platforms, making it hard to remember what is already owned, beaten, or sitting unplayed.
- Frustration: Losing track of which games have already been completed versus which ones are still sitting in a growing backlog—often resulting in decision fatigue or accidentally re-buying titles.
- Goal: Build and maintain a simple, clutter-free list that clearly separates games they want to play from games they have already played.
- Upon opening the app, they are immediately greeted with a prominent search bar so they can quickly look up titles and add them to their lists without extra setup.

## Scope

### In this version
1. Search the catalog: Visitors can immediately use the search bar on the Home page to look up games across the archive.
2. Save and categorize games: Visitors can add games directly to either their Want to Play list or their Played list.
3. Update or remove entries: Visitors can move saved games between Want to Play and Played, or remove titles from their ledger entirely.

### Left out, and why
- User accounts: Not included in this version so I could focus on searching and tracking games. Without accounts, saved games aren’t private to each visitor. If I continue the project, I’d consider adding accounts and private lists.


## The table
Table: `games`

| Column | Type | Example value |
| --- | --- | --- |
| `title` | `text` | a way out|
| `genre` | `text` | action-adventure |
| `year` | `int4` |2018 |

`id` and `created_at` are made for you.

### What a visitor can do
- create a list of games 
- Add a game to the list they have already played.
- add a game to a "wishlist" to play.


## Table 2

| Column | Type | Example value |
| --- | --- | --- |
| `gameid` | `int8` | 8|
| `played` | `bool` | true |
| `wishlist` | `bool` |true |

## The plan
![Wireframe 1](wireframe.png)
![Wireframe 2](wireframe2.png)

### Sections
- Navigation Bar: A shared top header allowing users to switch seamlessly between the Home page and their Quest Ledger (Saved Games).
- Hero & Search Bar (Home): A welcoming intro card featuring a live search bar to filter through over 6,000 game titles (and growing) and add them directly to a list.
- Quest Ledger (Saved Games): Two organized ledger lists—Want to Play (active backlog) and Played (completed games) where users can move titles between lists or remove them.

## System
- User Action: The visitor types a title into the search bar to look up games.
- Live Filtering: As the visitor types, the app dynamically narrows down and displays matching results from the game catalog in real time.
- Loading State: While fetching or filtering data, display:
       ༄˖°.🍃.ೃ࿔:･Loading༄˖°.🍃.ೃ࿔:･
- Empty / No Match State: If no games match the search query, display:
       𓅰 𓅬 𓅭 𓅮 𓅯 No games found. 𓅰 𓅬 𓅭 𓅮 𓅯
- Error State: If the data fetch fails or encounters an error, display:
      ☆.𓋼𓍊 𓆏 𓍊𓋼𓍊.☆ Error: (followed by the error message)

## Reflection: the plan

## What changed
-the way the user saves games has changed
-layout


## AI use
-UI Mockups & Visual Direction: Used AI image generation to visualize layout ideas, earth-tone color palettes, and ledger-style spacing before writing the CSS.
-Guided Learning & Debugging: Used AI as a step-by-step tutor to clarify Pico CSS concepts and troubleshoot layout issues—while writing all code independently to ensure full understanding of the implementation.

## Links
- Live: https://capstone-lv3.netlify.app/
- Repo: https://github.com/Hexaxolotl/capstone-lv3

## Team
Pod: @FrankCastle-Arch, @mattwainwright-dev, @CharityCP

## Pod plan
https://docs.google.com/document/d/1mQySxORC2Bp30ZHNkmuCxnYR95Vv0X6jM_2CmppKQQk/edit?usp=sharing
