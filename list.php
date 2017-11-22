<!doctype html>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>City Brew Employee Site</title>

<!-- Bootstrap -->
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/alternative.css" rel="stylesheet" type="text/css">
</head>
<body>

  <div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
        <a class="navbar-brand" href="#">City Brew</a> </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li><a href="#">Paperwork</a></li>
          <li><a href="#contact">CBU</a></li>
          <li><a href="http://www.citybrew.com/" target="_blank">Citybrew.com</a></li>
          <li><a href="http://www.citybreworders.com" target="_blank">Orders</a></li>
        </ul>
      </div>
    </div>
  </div>

  <?php
  $servername = "citybrewv2:us-central1:myinstance";
  $username = "root";
  $password = "Powerade5";
  $dbname = "citybrewv2";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  $sql = "INSERT INTO entries ()
  VALUES ('John', 'Doe', 'john@example.com')";

  if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
  ?>



<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery-1.11.3.min.js"></script>

<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.js"></script>
<script src="js/alternative.js"></script>
<script src="js/data-processing.js"></script>
<!--<script src="js/validator.js"></script>-->

</body>
</html>
