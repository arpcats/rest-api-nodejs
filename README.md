# rest-api-nodejs
Crud REST API using 
  - NodeJs - ExpressJs - Mysql
  
##### Database
``````````````````````````````````
DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
``````````````````````````````````

##### Insert Data Sample
``````````````````````````````````
LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES 
(1,'Test 0','test@g.co','2022-08-27 13:20:20'),
(2,'Test 1','test1@g.co','2022-08-27 13:20:20'),
(3,'Test 2','test2@g.co','2022-08-27 13:20:20'),
(4,'Test 3','test3@g.co','2022-08-27 13:20:20'),
(5,'Test 4','test4@g.co','2022-08-27 13:20:20');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

``````````````````````````````````


##### Drive the code or using this link
``````````````````````````````````
Get All users list rest api
API URL :-  http://127.0.0.1:3000/users
Method :- GET

Fetch Single User Detail REST API
API URL :-  http://127.0.0.1/user/1
Method :- GET

Create New User REST API
API URL :- http://127.0.0.1:3000/user
Method :- POST

Update User REST API
API URL :- http://127.0.0.1/user/{id}
Method :- PUT

DELETE User REST API
API URL :- http://127.0.0.1/user/{id}
Method :- DELETE
``````````````````````````````````

