# NutryUnir 

NutryUnir is an AI-powered mobile app that helps users in Mozambique make healthier food choices.
It combines food chemistry, nutrition, and artificial intelligence to provide insights into natural foods, working both online and offline.

Online: Real-time AI analysis using OpenAI and Foodb.ca data.

Offline: Access previously scanned foods and educational resources without internet.

✨ Features at a Glance
Feature	Status	Description
📷 Image Recognition	✅ Online & Offline	Identify foods via photo; cached offline for repeated access
🧪 Food Chemistry Insights	✅	Nutrients, bioactive compounds, chemical composition
📚 Educational Resources	✅ Online available	Learn about nutrition and food chemistry anytime
🤖 AI Chatbot (OpenAI)	✅ Online	Ask questions and receive personalized dietary guidance
💾 Offline Storage	✅	Uses AsyncStorage + react-native-storage for local caching
🌍 Localized Focus	✅	Tailored to Mozambican foods and diets
🛠️ Tech Stack

Framework: React Native (Expo)

AI: OpenAI API (chatbot, online), Google Generative AI

Food Data: Foodb.ca (online) + local cache for offline use

Storage: AsyncStorage + react-native-storage

Navigation: React Navigation (Stack & Bottom Tabs)

UI/UX: Expo Vector Icons, Linear Gradient, Markdown display

Language: TypeScript

🚀 Getting Started
1. Clone the repository
git clone https://github.com/your-username/NutryUnir.git
cd NutryUnir

2. Install dependencies
npm install
# or
yarn install

3. Configure API keys

Create a .env file in the project root:

OPENAI_API_KEY=your_openai_api_key
GOOGLE_GENAI_API_KEY=your_google_genai_key

4. Start the development server
npm run start
# or
expo start

📱 Usage

Open the app on your device (via Expo Go or APK).

Take a photo of a food item.

Online: AI identifies new foods and fetches nutrition data from Foodb.ca.

Offline: Previously scanned foods and educational resources are accessible locally.

Chat with the AI assistant when online.

Data is stored locally for offline use via AsyncStorage + react-native-storage.

📌 Roadmap

 Online food recognition + AI analysis

 Offline caching of scanned foods and nutrition data

 Personalized diet recommendations

 Community food database (user submissions) – planned for next version

🤝 Contributing

We welcome contributions!

Fork the repo

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

Check CONTRIBUTING.md
 for details.

📄 License

MIT License – see LICENSE
 for details.

👨‍💻 Authors

Elias Laquimane – Project Lead & Developer

Contributors

⭐ Support

If you find this project helpful, give it a star ⭐ — it helps the project grow and reach more users!
