/**
 * JS para acesso ao localStorage
 * Use para guardar JSON - se você não vai guardar um JSON vc não precisa disso
 * 
 * @author HFR
 * 14/12/2017 
 */

var localStorageJSON = function(mainKey) {
  this.mainKey = mainKey;
};

localStorageJSON.prototype.put = function(key,value){
	
	var json = this.getJson();
	if(!json){
		var json = {};
	}

	json[key] = value;
	localStorage.setItem(this.mainKey,JSON.stringify(json));	
}

localStorageJSON.prototype.get = function(key){
		
	var json = this.getJson();
	if(!json){
		return;
	}

	var dado = json[key];
	return dado;
}

localStorageJSON.prototype.remove = function(key){
	var json = this.getJson();
	delete json[key];
	localStorage.setItem(this.mainKey,JSON.stringify(json));
}

localStorageJSON.prototype.getJson = function(){
	var json		= JSON.parse(localStorage.getItem(this.mainKey));
	return json;
}

localStorageJSON.prototype.clearAll = function(){
	localStorage.removeItem(this.mainKey);
}