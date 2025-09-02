# NutryUnir

**NutryUnir** is an AI-powered mobile app designed to empower users in Mozambique to make healthier food choices. By combining food chemistry, nutrition science, and artificial intelligence, NutryUnir delivers deep insights into natural foods — accessible **online** and **offline**.

---

## 🌟 Features at a Glance

| Feature                   | Status             | Description                                                                         |
|---------------------------|--------------------|-------------------------------------------------------------------------------------|
| 📷 Image Recognition      | ✅ Online & Offline| Identify foods via photo; offline access for previously scanned foods                |
| 🧪 Food Chemistry Insights| ✅                 | See nutrients, bioactive compounds, and chemical composition                        |
| 📚 Educational Resources  | ✅ Online available| Learn about nutrition and food chemistry anytime                                    |
| 🤖 AI Chatbot (OpenAI)    | ✅ Online          | Get personalized dietary guidance and answers to your nutrition questions           |
| 💾 Offline Storage        | ✅                 | Uses AsyncStorage + react-native-storage for local caching                          |
| 🌍 Localized Focus        | ✅                 | Tailored to Mozambican foods and dietary habits                                     |

---

## 🛠️ Tech Stack

- **Framework:** React Native (Expo)
- **AI:** OpenAI API (chatbot, online), Google Generative AI
- **Food Data:** [Foodb.ca](https://foodb.ca/) (online) + local cache for offline use
- **Storage:** AsyncStorage + react-native-storage
- **Navigation:** React Navigation (Stack & Bottom Tabs)
- **UI/UX:** Expo Vector Icons, Linear Gradient, Markdown display
- **Language:** TypeScript

---

## 🚀 Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/NutryUnir.git
    cd NutryUnir
    ```

2. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure API keys**

    Create a `.env` file in the project root:
    ```
    OPENAI_API_KEY=your_openai_api_key
    GOOGLE_GENAI_API_KEY=your_google_genai_key
    ```

4. **Start the development server**
    ```bash
    npm run start
    # or
    expo start
    ```

---

## 📱 Usage

1. Open the app on your device (via Expo Go or APK).
2. Take a photo of a food item.
3. **Online:** The AI identifies foods and fetches nutrition data from Foodb.ca.
4. **Offline:** Previously scanned foods and educational resources are accessible locally.
5. Chat with the AI assistant (when online).
6. Data is stored locally for offline use via AsyncStorage + react-native-storage.

---

## 📌 Roadmap

- [x] Online food recognition + AI analysis
- [x] Offline caching of scanned foods and nutrition data
- [x] Personalized diet recommendations
- [ ] Community food database (user submissions) — *planned for next version*

---

## 🤝 Contributing

We welcome contributions!

1. **Fork the repo**
2. **Create a feature branch**
    ```bash
    git checkout -b feature/amazing-feature
    ```
3. **Commit your changes**
    ```bash
    git commit -m 'Add some feature'
    ```
4. **Push to the branch**
    ```bash
    git push origin feature/amazing-feature
    ```
5. **Open a Pull Request**

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 👨‍💻 Authors

- **Elias Laquimane** – Project Lead & Developer


---

## ⭐ Support

If you find this project helpful, give it a star ⭐ — it helps the project grow and reach more users!
