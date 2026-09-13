# Bubble Game

Ek simple JavaScript bubble-hit game. Bubbles may numbers hote hain, aur upar screen par ek **Hit** value show hoti hai. Aap ko wohi bubble click karna hai jiska number Hit value se match kare — har sahi click par **10 points** milte hain aur naye bubbles generate hote hain. 60 seconds may maximum score banana hai!

## How to Play

1. Game kholtay hi timer start ho jata hai (60 seconds).
2. Top bar may **Hit** value dekhain (0–9).
3. Usi number wala bubble click karein.
4. Sahi click par:
   - **+10 score**
   - Nayi Hit value generate hoti hai
   - Saare bubbles dobara shuffle ho jate hain
5. Timer 60 second par pohanch kar **Game Over** ho jata hai aur final score show hota hai.

## Built With

- **HTML** – structure (game screen, score panel)
- **CSS** – styling (bubbles, layout, hover effects)
- **JavaScript (Vanilla)** – game logic (bubbles, timer, score, hit system)

Koi framework ya library use nahi hui — sirf pure vanilla JavaScript.

## Files

| File | Description |
|------|-------------|
| `index.html` | Game ka structure — Hit / Score / Timer panel aur game area |
| `style.css` | Styling — green theme, bubble circles, hover effects |
| `script.js` | Game logic — `makeBubble()`, `run_timer()`, `Hiting_Value()`, `total_Score()` aur click handling |

## Run Karne Ka Tareeqa

Koi install ya build ki zaroorat nahi:

1. `index.html` ko browser may kholein, **ya**
2. VS Code may **Live Server** extension se run karein.

Bas! Game shuru ho jayegi. 

## Game Logic (Overview)

- `makeBubble()` – 180 random bubbles (0–9) generate karta hai.
- `run_timer()` – 1 second interval se 60 tak count karta hai, phir game over.
- `Hiting_Value()` – Random hit number generate karta hai.
- `total_Score()` – Sahi click par score +10 karta hai.
- Click listener – Clicked bubble ka number Hit value se match karta hai (event delegation se).
