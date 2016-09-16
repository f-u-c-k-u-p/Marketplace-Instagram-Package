# Instagram Package
This Package can be used to build non-automated, authentic, high-quality apps and services.

## How to get `apiKey`:
// todo

## Instagram.getAccessToken
Description will be here

## Instagram.getCurrentUser
Get information about the owner of the `accessToken`.

| Field            | Type   | Description  |
| -------------    |--------| -------------|
| `accessToken`    |string  | The accessToken obtained from Instagram. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to" : "{\"meta\": {\"code\": 200}, \"data\": {\"username\": \"bar\", \"bio\": \"foo\", \"website\": \"\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_155545107_a.jpg\", \"full_name\": \"Foo Bar\", \"counts\": {\"media\": 5, \"followed_by\": 13, \"follows\": 13}, \"id\": \"378302c3842\"}}"
		}
	}
}
```

## Instagram.getUserInformation
Get information about any Instagram user.

| Field            | Type   | Description  |
| -------------    |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `userId`*         |string  | The user id on Instagram. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"userId": "378302c38421"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to" : "{\"meta\": {\"code\": 200}, \"data\": {\"username\": \"bar\", \"bio\": \"foo\", \"website\": \"\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_155545107_a.jpg\", \"full_name\": \"Foo Bar\", \"counts\": {\"media\": 5, \"followed_by\": 13, \"follows\": 13}, \"id\": \"378302c38421\"}}"
		}
	}
}
```

## Instagram.getCurrentUsersRecentMedia
Get the most recent media published by the owner of the access_token.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `count`           |integer | Count of media to return. |
| `minId`           |string  | Return media later than this `minId`. |
| `maxId`           |string  | Return media earlier than this `maxId`. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"count":1
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to" :"{\"pagination\": {\"next_url\": \"https://api.instagram.com/v1/users/3783043842/media/recent?access_token=3783043842.a2e86bc.8af224199c7147f9a18f7ff36f5bcd8d\\u0026count=2\\u0026max_id=1329639924173304609_3783043842\", \"next_max_id\": \"1329639924173304609_3783043842\"}, \"meta\": {\"code\": 200}, \"data\": [{\"attribution\": null, \"tags\": [], \"type\": \"image\", \"location\": {\"latitude\": 50.445858, \"name\": \"Avalon\", \"longitude\": 30.5101719, \"id\": 1013986062}, \"comments\": {\"count\": 0}, \"filter\": \"Lark\", \"created_time\": \"1473525145\", \"link\": \"https://www.instagram.com/p/BKLqaSnBHnm/\", \"likes\": {\"count\": 7}, \"images\": {\"low_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 320, \"height\": 320}, \"thumbnail\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 150, \"height\": 150}, \"standard_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 640, \"height\": 640}}, \"users_in_photo\": [], \"caption\": null, \"user_has_liked\": false, \"id\": \"1336348239087303142_3783043842\", \"user\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}}, {\"attribution\": null, \"tags\": [\"\\u043c\\u0430\\u043a\\u0443\\u043b\\u0430\\u0442\\u0443\\u0440\\u0430\"], \"type\": \"image\", \"location\": null, \"comments\": {\"count\": 0}, \"filter\": \"Moon\", \"created_time\": \"1472725452\", \"link\": \"https://www.instagram.com/p/BJz1HdfhvMh/\", \"likes\": {\"count\": 7}, \"images\": {\"low_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 320, \"height\": 320}, \"thumbnail\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 150, \"height\": 150}, \"standard_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 640, \"height\": 640}}, \"users_in_photo\": [], \"caption\": {\"created_time\": \"1472725452\", \"text\": \"by @saffftenko \\n#\\u043c\\u0430\\u043a\\u0443\\u043b\\u0430\\u0442\\u0443\\u0440\\u0430\", \"from\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}, \"id\": \"17842009366192476\"}, \"user_has_liked\": false, \"id\": \"1329639924173304609_3783043842\", \"user\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}}]}"
		}
	}
}
```

## Instagram.getUsersRecentMedia
Get the most recent media published by a user.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `userId`*         |string  | The user id on Instagram. |
| `count`           |integer | Count of media to return. |
| `minId`           |string  | Return media later than this `minId`. |
| `maxId`           |string  | Return media earlier than this `maxId`. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"userId": "378302c38421",
	"count":1
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to" :"{\"pagination\": {\"next_url\": \"https://api.instagram.com/v1/users/3783043842/media/recent?access_token=3783043842.a2e86bc.8af224199c7147f9a18f7ff36f5bcd8d\\u0026count=2\\u0026max_id=1329639924173304609_3783043842\", \"next_max_id\": \"1329639924173304609_3783043842\"}, \"meta\": {\"code\": 200}, \"data\": [{\"attribution\": null, \"tags\": [], \"type\": \"image\", \"location\": {\"latitude\": 50.445858, \"name\": \"Avalon\", \"longitude\": 30.5101719, \"id\": 1013986062}, \"comments\": {\"count\": 0}, \"filter\": \"Lark\", \"created_time\": \"1473525145\", \"link\": \"https://www.instagram.com/p/BKLqaSnBHnm/\", \"likes\": {\"count\": 7}, \"images\": {\"low_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 320, \"height\": 320}, \"thumbnail\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 150, \"height\": 150}, \"standard_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 640, \"height\": 640}}, \"users_in_photo\": [], \"caption\": null, \"user_has_liked\": false, \"id\": \"1336348239087303142_3783043842\", \"user\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}}, {\"attribution\": null, \"tags\": [\"\\u043c\\u0430\\u043a\\u0443\\u043b\\u0430\\u0442\\u0443\\u0440\\u0430\"], \"type\": \"image\", \"location\": null, \"comments\": {\"count\": 0}, \"filter\": \"Moon\", \"created_time\": \"1472725452\", \"link\": \"https://www.instagram.com/p/BJz1HdfhvMh/\", \"likes\": {\"count\": 7}, \"images\": {\"low_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 320, \"height\": 320}, \"thumbnail\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 150, \"height\": 150}, \"standard_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 640, \"height\": 640}}, \"users_in_photo\": [], \"caption\": {\"created_time\": \"1472725452\", \"text\": \"by @saffftenko \\n#\\u043c\\u0430\\u043a\\u0443\\u043b\\u0430\\u0442\\u0443\\u0440\\u0430\", \"from\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}, \"id\": \"17842009366192476\"}, \"user_has_liked\": false, \"id\": \"1329639924173304609_3783043842\", \"user\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}}]}"
		}
	}
}
```


## Instagram.getCurrentUsersLikedMedia
Get the list of recent media liked by the owner of the access_token.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `maxLikeId`       |string  | Return media earlier than this `maxLikeId`. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to": "{ \\"data\\": [{ \\"location\\": { \\"id\\": \\"833\\", \\"latitude\\": 37.77956816727314, \\"longitude\\": -122.41387367248539, \\"name\\": \\"Civic Center BART\\" }, \\"comments\\": { \\"count\\": 16 }, \\"caption\\": null, \\"link\\": \\"http://instagr.am/p/BXsFz/\\", \\"likes\\": { \\"count\\": 190 }, \\"created_time\\": \\"1296748524\\", \\"images\\": { \\"low_resolution\\": { \\"url\\": \\"http://distillery.s3.amazonaws.com/media/2011/02/03/efc502667a554329b52d9a6bab35b24a_6.jpg\\", \\"width\\": 306, \\"height\\": 306 }, \\"thumbnail\\": { \\"url\\": \\"http://distillery.s3.amazonaws.com/media/2011/02/03/efc502667a554329b52d9a6bab35b24a_5.jpg\\", \\"width\\": 150, \\"height\\": 150 }, \\"standard_resolution\\": { \\"url\\": \\"http://distillery.s3.amazonaws.com/media/2011/02/03/efc502667a554329b52d9a6bab35b24a_7.jpg\\", \\"width\\": 612, \\"height\\": 612 } }, \\"type\\": \\"image\\", \\"users_in_photo\\": [], \\"filter\\": \\"Earlybird\\", \\"tags\\": [], \\"id\\": \\"22987123\\", \\"user\\": { \\"username\\": \\"kevin\\", \\"full_name\\": \\"Kevin S\\", \\"profile_picture\\": \\"http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg\\", \\"id\\": \\"3\\" } }, { \\"videos\\": { \\"low_resolution\\": { \\"url\\": \\"http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_102.mp4\\", \\"width\\": 480, \\"height\\": 480 }, \\"standard_resolution\\": { \\"url\\": \\"http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_101.mp4\\", \\"width\\": 640, \\"height\\": 640 }, \\"comments\\": { \\"count\\": 2 }, \\"caption\\": null, \\"likes\\": { \\"count\\": 1 }, \\"link\\": \\"http://instagr.am/p/D/\\", \\"created_time\\": \\"1279340983\\", \\"images\\": { \\"low_resolution\\": { \\"url\\": \\"http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_6.jpg\\", \\"width\\": 306, \\"height\\": 306 }, \\"thumbnail\\": { \\"url\\": \\"http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_5.jpg\\", \\"width\\": 150, \\"height\\": 150 }, \\"standard_resolution\\": { \\"url\\": \\"http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_7.jpg\\", \\"width\\": 612, \\"height\\": 612 } }, \\"type\\": \\"video\\", \\"users_in_photo\\": null, \\"filter\\": \\"Vesper\\", \\"tags\\": [], \\"id\\": \\"363839373298\\", \\"user\\": { \\"username\\": \\"kevin\\", \\"full_name\\": \\"Kevin S\\", \\"profile_picture\\": \\"http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg\\", \\"id\\": \\"3\\" }, \\"location\\": null } } ] }"

		}
	}
}
```
