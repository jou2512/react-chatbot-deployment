(function () {
  const chatbotContainer = document.createElement("div");
  chatbotContainer.id = "chatbot-container";
  document.body.appendChild(chatbotContainer);

  if (chatbotContainer) {
    var script = document.createElement("script");
    script.src = "./static/js/main.js"; // Path to your main.js in the build directory
    script.type = "module";
    script.onload = function () {
      // Extract the attributes from the script tag
      var API_Key_Project = script.getAttribute("API_Key_Project");
      var API_Key_Dialog = script.getAttribute("API_Key_Dialog");
      var otherAPIKeys = JSON.parse(script.getAttribute("otherAPIKeys"));

      // Call the initialization function from your main script and pass the variables
      initChatbot(
        chatbotContainer,
        {
            apiKeyProject: API_Key_Project,
            apiKeyDialog: API_Key_Dialog,
            otherAPIKeys: otherAPIKeys,
        }
      );
    };

    chatbotContainer.appendChild(script);
  }
})();
