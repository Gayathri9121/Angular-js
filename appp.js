<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>User Registraion Form - W3Adda</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<script src="app.js"></script>
</head>
<body>
<div ng-app = "myApp" class = "container" style="width:550px">
<div style="text-align:center;">
<h3><b>User Registraion Form - W3Adda</b></h3>
</div>
<div ng-controller = "RegisterController">
<div align="right">
<a href="#" ng-click="searchUser()">{{title}}</a>
</div>
<form role = "form" class="well" ng-hide="ifSearchUser">
<div class = "form-group">
<label for = "name"> Name:  </label>
<input type = "text" id = "name" class = "form-control" placeholder = "Enter Name " ng-model = "newuser.name">
</div>
<div class = "form-group">
<label for = "email"> Email:  </label>
<input type = "email" id = "email" class = "form-control" placeholder = "Enter Email " ng-model = "newuser.email">
</div>
<div class = "form-group">
<label for = "password"> Password:  </label>
<input type = "password" id = "password" class = "form-control" placeholder = "Enter Password " ng-model = "newuser.password">
</div>
<div class = "form-group">
<label for = "phone"> Phone:  </label>
<input type = "text" id = "phone" class = "form-control" placeholder = "Enter Phone " ng-model = "newuser.phone">
</div>
<br>
<input type="hidden" ng-model="newuser.id">
<input type="button" class="btn btn-primary" ng-click="saveUser()" class="btn btn-primary" value = "Submit">
</form>
<div><h4><b>Registered Users</b></h4>
<table ng-if="users.length" class = "table table-striped table-bordered table-hover">
<thead>
<tr class = "info">
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th ng-if="!ifSearchUser">Action</th>
</tr>
</thead>
<tbody>
<tr ng-repeat = "user in users">
<td>{{ user.name }}</td>
<td>{{ user.email }}</td>
<td>{{ user.phone }}</td>
<td ng-if="!ifSearchUser">
<a href="#" ng-click="edit(user.id)" role = "button" class = "btn btn-info">edit</a> &nbsp;
<a href="#" ng-click="delete(user.id)" role = "button" class = "btn btn-danger">delete</a>
</td>
</tr>
</tbody>
</table>
<div ng-hide="users.length > 0">No Users Found</div>
</div>
</div>
</div>
</body>
</html>