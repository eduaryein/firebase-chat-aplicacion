<!-- jQuery CDN -->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="<?php echo $url; ?>js/materialize.min.js"></script>
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.3.0/firebase.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/7.3.0/firebase-analytics.js"></script>

    <script>
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyD0d5YoznNHqIViWDud-cPLOXuBoeSWp24",
        authDomain: "chat-aplication-example.firebaseapp.com",
        databaseURL: "https://chat-aplication-example.firebaseio.com",
        projectId: "chat-aplication-example",
        storageBucket: "chat-aplication-example.appspot.com",
        messagingSenderId: "782918484583",
        appId: "1:782918484583:web:d0b84c4e1153698554cac2",
        measurementId: "G-JZMFW77SY5"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    </script>
    <script src="<?php echo $url; ?>js/app.js"></script>
</body>
</html>