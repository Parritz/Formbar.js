const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()

var db = new sqlite3.Database('database/database.db')

async function getUser(request) {
	let user

	if (!request.session.user && !request.query.API) return false
	if (request.session.user) {
		user = new Promise((resolve, reject) => {
			db.get(
				'SELECT id, username, permissions FROM users WHERE username = ?',
				[request.query.user],
				(error, userData) => {
					if (error) {
						console.log(error)
						reject(false)
					}
					else if (userData) {
						userData.class = request.session.class
						return resolve(userData)
					} else return reject(false)
				}
			)
		})
	}
	else if (request.query.API) {
		user = new Promise((resolve, reject) => {
			db.get(
				'SELECT id, username, permissions FROM users WHERE API = ?',
				[request.query.API],
				(error, userData) => {
					if (error) {
						console.log(error)
						reject(false)
					}
					else if (userData) {
						userData.class = request.query.class
						if (userData.class) {
							cd[userData.class].students
						}
						return resolve(userData)
					} else return reject(false)
				}
			)
		})
	}
	return user
}

const api = (cD) => {
	// for testing
	cD = {
		"noClass": {
			"students": {}
		},
		"d5f5": {
			"className": "a",
			"students": {
				"a": {
					"username": "a",
					"id": 3,
					"permissions": 0,
					"pollRes": "",
					"pollTextRes": "",
					"help": "",
					"break": false,
					"quizScore": "",
					"API": "f5f91296026fcc3880c548bf88ca470f9f281fb1562596996e311eb29394e218443d561aa92a886f39eb40da5b254135fc0eb302c6fa6df87705af2f0bdf6108"
				},
				"b": {
					"username": "b",
					"id": 4,
					"permissions": 2,
					"pollRes": "a",
					"pollTextRes": "",
					"help": "",
					"break": false,
					"quizScore": "",
					"API": "58b11a05b0b545f1fdff7fd7907507ff8e6ea6f59705ed1e0dccc38c9a06590b1c6aa52fbde05f7839a08198050f735338f706c0c78eb38f85eaf9683376ecbe"
				},
				// "c": {
				// 	"username": "c",
				// 	"id": 5,
				// 	"permissions": 2,
				// 	"pollRes": "b",
				// 	"pollTextRes": "",
				// 	"help": "",
				// 	"break": false,
				// 	"quizScore": "",
				// 	"API": "c346f2f177386e0ff6ec1efa0007925bbc4dcc3c568a1131025d2033e47f524b7828b5de0f54605348b863771ddc7a8c62bb0b1a4924bbf0356241d849502dc1"
				// },
				// "d": {
				// 	"username": "d",
				// 	"id": 6,
				// 	"permissions": 2,
				// 	"pollRes": "a",
				// 	"pollTextRes": "hi",
				// 	"help": "",
				// 	"break": false,
				// 	"quizScore": "",
				// 	"API": "592e030ce3b695d414f688b9e3dac02fc49c8aea29577df3c0a29f6083762fe489f4491d63eb04a1fab69c5a971f6b5f182791ba03ae5a30da6416e65662ac88"
				// }
			},
			"pollStatus": true,
			"posPollResObj": {
				"a": "answer a",
				"b": "answer b"
			},
			"posTextRes": true,
			"pollPrompt": "",
			"key": "d5f5",
			"lesson": {},
			"activeLesson": false,
			"currentStep": 0,
			"mode": "poll",
			"blindPoll": false
		},
		"ue69": {
			"className": "d",
			"students": {
				"d": {
					"username": "d",
					"id": 6,
					"permissions": 0,
					"pollRes": "",
					"pollTextRes": "",
					"help": "",
					"break": false,
					"quizScore": "",
					"API": "592e030ce3b695d414f688b9e3dac02fc49c8aea29577df3c0a29f6083762fe489f4491d63eb04a1fab69c5a971f6b5f182791ba03ae5a30da6416e65662ac88"
				},
				"e": {
					"username": "e",
					"id": 7,
					"permissions": 2,
					"pollRes": "",
					"pollTextRes": "",
					"help": "",
					"break": false,
					"quizScore": "",
					"API": "a2585a0f7fbb8b42be5adf94bfdcb5d909e9392afd0d12921d12f257def7fd92f2eeb113f562642420c9136f6ac513e421e6c106ab44f0306feb2dad02fa8eae"
				}
			},
			"pollStatus": true,
			"posPollResObj": {
				"Yes": "Yes",
				"No": "No"
			},
			"posTextRes": false,
			"pollPrompt": "Ready for class",
			"key": "ue69",
			"lesson": {},
			"activeLesson": false,
			"currentStep": 1,
			"mode": "poll",
			"blindPoll": false,
			"steps": [
				{
					"type": "poll",
					"labels": [
						"Yes",
						"No"
					],
					"responses": 2,
					"prompt": "Ready for class"
				},
				{
					"type": "quiz",
					"questions": [
						[
							"What kind of filepath is on the same server as your web site?",
							1,
							"Relative",
							"…of the Warrior",
							"Absolute",
							"Static"
						],
						[
							"Which tag is used to load CSS from other files?",
							3,
							"style",
							"script",
							"link",
							"load"
						],
						[
							"Replacing a variable's identifier (name) with its value is called:",
							4,
							"replacement",
							"computation",
							"solving",
							"subsititution"
						],
						[
							"In javascript, a 'method' is:",
							2,
							"Part of a program algorithm",
							"Something a code object can do",
							"A convention in programming syntax",
							"A different way of changing variables"
						],
						[
							"In javascript, a 'property' is:",
							2,
							"Something that changes an object's style",
							"A variable that belongs to an object",
							"Something that changes the page's HTML"
						],
						[
							"In javascript, what is a 'Class'",
							5,
							"Something boring",
							"An object reader",
							"A tool for  psuhing objects",
							"A goofy aaah thing",
							"An object creation tool"
						]
					]
				},
				{
					"type": "lesson",
					"date": "9/19/2023",
					"lesson": [
						[
							"Learning Objective",
							"Nocti Prep",
							"Javascript",
							"Lore of Warhammer 40k"
						],
						[
							"Daily Goals",
							"Get Paid",
							"Win Life",
							"Do Better"
						],
						[
							"Assignments Due",
							"Hit 10 Kills in Fortnite"
						]
					]
				},
				{
					"type": "poll",
					"labels": [
						"Good",
						"Meh",
						"Confused",
						"Upset"
					],
					"responses": 4,
					"prompt": "How did you feel about today's lesson?"
				}
			]
		}
	}

	for (let classData of Object.values(cD)) {
		for (let studentData of Object.values(classData.students)) {
			delete studentData.API
			delete studentData.pollTextRes
		}
	}

	// for testing
	router.get('/user', async (request, response) => {
		let user = await getUser(request)
		response.json(user)
	})

	// for testing
	router.get('/cd', async (request, response) => {
		response.json(cD)
	})

	router.get('/me', async (request, response) => {
		let user = await getUser(request)
		if (!user)
			response.json({ error: 'user not logged in or missing API key' })
		else if (!user.class)
			response.json({ error: 'no class selected' })
		else if (!cD[user.class])
			response.json({ error: 'class not started' })
		else if (!cD[user.class].students[user.username])
			response.json({ error: 'user not logged in' })
		else
			response.json(cD[user.class].students[user.username])
	})

	router.get('/class/:key', async (request, response) => {
		let user = await getUser(request)
		let key = request.params.key

		if (!cD[key])
			response.json({ error: 'class not started' })
		else if (!cD[key].students[user.username])
			response.json({ error: 'user is not logged into the select class' })
		else response.json(cD[key])
	})

	router.get('/class/:key/students', (request, response) => {
		let key = request.params.key

		if (!cD[key]) {
			response.json({ error: 'class not started' })
			return
		}

		response.json(cD[key].students)
	})

	router.get('/class/:key/all-students', (request, response) => {
		let key = request.params.key

		if (!cD[key]) {
			response.json({ error: 'class not started' })
			return
		}

		db.all(
			'SELECT DISTINCT users.id, users.username, users.pollRes, CASE WHEN users.username = classroom.owner THEN users.permissions ELSE classusers.permissions END AS permissions FROM users INNER JOIN classusers ON users.id = classusers.studentuid OR users.username = classroom.owner INNER JOIN classroom ON classusers.classuid = classroom.id WHERE classroom.key = ?',
			[key],
			(error, dbClassData) => {
				if (error) console.log(error)
				if (dbClassData) {
					let students = {}
					for (let dbUser of dbClassData) {
						let currentUser = cD[key].students[dbUser.username]
						students[dbUser.username] = {
							username: dbUser.username,
							id: dbUser.id,
							permissions: dbUser.permissions,
							pollRes: currentUser ? currentUser.pollRes : dbUser.pollRes,
							help: currentUser ? currentUser.help : null,
							break: currentUser ? currentUser.break : null,
							quizScore: currentUser ? currentUser.quizScore : null
						}
					}
					response.json(students)
				}
			})
	})

	router.get('/class/:key/polls', (request, response) => {
		let key = request.params.key
		let classData = cD[key]
		let polls = {}

		if (!classData) {
			response.status(404).json({ error: 'class not started' })
			return
		}
		if (!classData.pollStatus) {
			response.status(404).json({ error: 'no poll' })
			return
		}

		if (classData.pollPrompt)
			polls.pollPrompt = classData.pollPrompt

		if (Object.keys(classData.posPollResObj).length > 0) {
			for (let [resKey, resValue] of Object.entries(classData.posPollResObj)) {
				polls[resKey] = {
					display: resValue,
					responses: 0
				}
			}
			for (let studentData of Object.values(classData.students)) {
				if (
					studentData &&
					Object.keys(polls).includes(studentData.pollRes)
				)
					polls[studentData.pollRes].responses++
			}
		}

		response.json(polls)
	})

	return router
}

module.exports = api