// Permissions range from highest to lowest
const MANAGER_PERMISSIONS = 5
const TEACHER_PERMISSIONS = 4
const MOD_PERMISSIONS = 3
const STUDENT_PERMISSIONS = 2
const GUEST_PERMISSIONS = 1
const BANNED_PERMISSIONS = 0

// Permission level needed to access each page along with if it's a class-related page or not
const PAGE_PERMISSIONS = {
	controlPanel: { permissions: MOD_PERMISSIONS, classPage: true },
	previousLessons: { permissions: TEACHER_PERMISSIONS, classPage: true },
	student: { permissions: GUEST_PERMISSIONS, classPage: true },
	virtualbar: { permissions: GUEST_PERMISSIONS, classPage: true },
	makeQuiz: { permissions: TEACHER_PERMISSIONS, classPage: true },
	plugins: { permissions: STUDENT_PERMISSIONS, classPage: true },
	manageClass: { permissions: TEACHER_PERMISSIONS, classPage: false },
	createClass: { permissions: TEACHER_PERMISSIONS, classPage: false },
	selectClass: { permissions: GUEST_PERMISSIONS, classPage: false },
	managerPanel: { permissions: MANAGER_PERMISSIONS, classPage: false }
}

// Defines the default permissions for people in a class
const DEFAULT_CLASS_PERMISSIONS = {
	games: MOD_PERMISSIONS, // Control the games	
	controlPolls: MOD_PERMISSIONS,	
	manageStudents: TEACHER_PERMISSIONS,
	breakAndHelp: MOD_PERMISSIONS, // Approve break and help requests
	manageClass: TEACHER_PERMISSIONS,	
	lights: MOD_PERMISSIONS, // Control the FormPix lights
	sounds: MOD_PERMISSIONS, // Control the FormPix sounds
	userDefaults: GUEST_PERMISSIONS
}

// This defines global socket permissions that define who can use each socket event
const GLOBAL_SOCKET_PERMISSIONS = {
	permChange: MANAGER_PERMISSIONS,
	deleteClass: TEACHER_PERMISSIONS,
	getOwnedClasses: TEACHER_PERMISSIONS,
	logout: GUEST_PERMISSIONS,
	getUserClass: GUEST_PERMISSIONS,
	deleteUser: MANAGER_PERMISSIONS,
	managerUpdate: MANAGER_PERMISSIONS,
	ipUpdate: MANAGER_PERMISSIONS,
	addIp: MANAGER_PERMISSIONS,
	removeIp: MANAGER_PERMISSIONS,
	changeIp: MANAGER_PERMISSIONS,
	toggleIpList: MANAGER_PERMISSIONS,
	saveTags: TEACHER_PERMISSIONS,
	newTag: TEACHER_PERMISSIONS,
	removeTag: TEACHER_PERMISSIONS,
	passwordRequest: STUDENT_PERMISSIONS,
	approvePasswordChange: MANAGER_PERMISSIONS,
	passwordUpdate: MANAGER_PERMISSIONS
}

// This defines socket permissions for the class that define who can use each socket event
const CLASS_SOCKET_PERMISSIONS = {
	help: STUDENT_PERMISSIONS,
	pollResp: STUDENT_PERMISSIONS,
	requestBreak: STUDENT_PERMISSIONS,
	endBreak: STUDENT_PERMISSIONS,
	pollUpdate: STUDENT_PERMISSIONS,
	modeUpdate: STUDENT_PERMISSIONS,
	quizUpdate: STUDENT_PERMISSIONS,
	lessonUpdate: STUDENT_PERMISSIONS,
	vbUpdate: GUEST_PERMISSIONS,
	vbTimer: GUEST_PERMISSIONS,
	leaveClass: GUEST_PERMISSIONS,
	cpUpdate: MOD_PERMISSIONS,
	previousPollDisplay: TEACHER_PERMISSIONS,
	pluginUpdate: STUDENT_PERMISSIONS,
	setClassPermissionSetting: MANAGER_PERMISSIONS,
	classPoll: MOD_PERMISSIONS,
	timer: TEACHER_PERMISSIONS,
	timerOn: TEACHER_PERMISSIONS
}

// This associates actions with the permissions of other actions
// Example: To start a poll, you first need the controlPolls permission
const CLASS_SOCKET_PERMISSION_MAPPER = {
	startPoll: 'controlPolls',
	clearPoll: 'controlPolls',
	endPoll: 'controlPolls',
	customPollUpdate: 'controlPolls',
	savePoll: 'controlPolls',
	deletePoll: 'controlPolls',
	setPublicPoll: 'controlPolls',
	sharePollToUser: 'controlPolls',
	removeUserPollShare: 'controlPolls',
	getPollShareIds: 'controlPolls',
	sharePollToClass: 'controlPolls',
	removeClassPollShare: 'controlPolls',
	doStep: 'controlPolls',
	classPermChange: 'manageStudents',
	classKickUser: 'manageStudents',
	classKickStudents: 'manageStudents',
	approveBreak: 'breakAndHelp',
	deleteTicket: 'breakAndHelp',
	changePlugin: 'manageClass',
	addPlugin: 'manageClass',
	removePlugin: 'manageClass',
	endClass: 'manageClass',
	modechange: 'manageClass',
	classBannedUsersUpdate: 'manageStudents',
	classBanUser: 'manageStudents',
	classUnbanUser: 'manageStudents',
}

module.exports = {
	// Permissions
    MANAGER_PERMISSIONS,
    TEACHER_PERMISSIONS,
    MOD_PERMISSIONS,
    STUDENT_PERMISSIONS,
    GUEST_PERMISSIONS,
    BANNED_PERMISSIONS,

	// Page permissions
    PAGE_PERMISSIONS,
    DEFAULT_CLASS_PERMISSIONS,

	// Socket permissions
	GLOBAL_SOCKET_PERMISSIONS,
	CLASS_SOCKET_PERMISSIONS,
	CLASS_SOCKET_PERMISSION_MAPPER
}