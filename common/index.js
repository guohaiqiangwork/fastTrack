export default {
    memberObj:{
		// hostUrl:'http://121.89.193.22:9090',
		hostUrl:window.location.host
    },
	setMemberObj(data){
	    this.memberObj = Object.assign({},this.memberObj,data) 
	}
}