function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		return submittedUsers.every(function(currentValue){
			return goodUsers.some(function(currentValuez){
				return currentValue.id === currentValuez.id
			})
		})
	}
}

module.exports = checkUsersValid;