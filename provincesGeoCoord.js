function getData(){
	test update a new gitHub;
	git tracks change a file;
	git changed; of files
		GIT ;
}


function getGeocoordByMapName(map_name){
	var pinyin_map_name = "";
	var geoCoordMap = {};
	if(map_name == "江苏" || map_name == "江苏省"){
		pinyin_map_name = "jiangsu";
		geoCoordMap = {
				"南京": [118.58,	32.24],	
				"徐州": [117.5,		34.46],	
				"连云港": [118.76,	34.79],	
				"南通": [120.66,	32.41],	
				"苏州": [120.52,	31.52],	
				"无锡": [119.59,	31.52],	
				"常州": [119.45	,	31.82],	
				"宿迁": [118.3,		34.16],	
				"淮安": [118.8,	33.8],	
				"盐城": [120.0,	33.58],	
				"扬州": [119.32,	32.89],	
				"泰州": [119.85,		32.59],	
				"镇江": [119.34,	32.2],	
		};
		//console.info(geoCoordMap)
	}else if(map_name == "浙江" || map_name == "浙江省" ){
		pinyin_map_name = "zhejiang";
		geoCoordMap = {
			"杭州": [119.49,	29.82],	
			"宁波": [121.56,	29.86],	
			"温州": [120.65,	28.01],	
			"绍兴": [120.58,	30.01],	
			"湖州": [120.1,		30.86],	
			"嘉兴": [120.76,	30.77],	
			"金华": [119.64,	29.12],	
			"衢州": [118.88,	28.97],	
			"舟山": [122.20,	30.00],	
			"台州": [121.13,	28.8],	
			"丽水": [119.92,	28.45],	
		};
	}else if(map_name == "安徽" || map_name == "安徽省" ){
		pinyin_map_name = "anhui";
		geoCoordMap = {
			"合肥": [117.27,	31.86],
			"蚌埠": [117.34,	32.93],
			"芜湖": [118.38,	31.33],
			"淮南": [116.98,	32.62],
			"马鞍山": [118.48,	31.56],
			"淮北": [116.77,	33.97],
			"铜陵": [117.82,	30.93],
			"安庆": [117.03,	30.52],
			"黄山": [116.19,	30.26],
			"阜阳": [115.81,	32.89],
			"宿州": [116.97,	33.63],
			"滁州": [118.31,	32.33],
			"六安": [116.49,	31.73],
			"宣城": [118.73,	31.95],
			"池州": [118.19,	31.26],
			"亳州": [117.19,	32.26],
		};
	}else if(map_name == "福建" || map_name == "福建省" ){
		pinyin_map_name = "fujian";
		geoCoordMap = {
	        "南平": [118.16,	26.65],
	        "三明": [117.61,	26.23],
	        "龙岩": [117.01,	25.12],
	        "漳州": [117.35,	24.52],
	        "宁德": [119.52,	26.65],
	        "福州": [119.3,		26.08],
	        "莆田": [119,		25.44],
	        "厦门": [118.1,		24.46],
	        "泉州": [118.58,	24.93],
		};
	}else if(map_name == "上海" || map_name == "上海市"){
		pinyin_map_name = "shanghai";
		geoCoordMap = {
			"黄埔区": [121.48,		31.23],
			"徐汇区": [121.43,		31.18],
			"长宁区": [121.42,		31.22],
			"静安区": [121.45,		31.23],
			"普陀区": [121.4,		3125],
			"闸北区": [121.45,		31.25],
			"虹口区": [121.5,		31.27],
			"杨浦区": [121.52,		31.27],
			"闵行区": [121.38,		31.12],
			"宝山区": [121.48,		31.4],
			"嘉定区": [121.27,		31.38],
			"金山区": [121.33,		30.75],
			"浦东区": [121.53,		31.22],
			"松江区": [121.22,		31.03],
			"青浦区": [121.12,		31.15],
			"南汇区": [121.75,		31.05],
			"奉贤区": [121.47,		30.92],
			"崇明区": [121.4,		31.62],
		};
	}else if(map_name == "山东" || map_name == "山东省"){
		pinyin_map_name = "shandong";
		geoCoordMap = {
			"济南": [117,		36.65],
			"青岛": [120.33,	36.07],
			"淄博": [118.05,	36.78],
			"枣庄": [117.57,	34.86],
			"东营": [118.49,	37.46],
			"烟台": [121.39,	37.52],
			"潍坊": [119.1,	    36.62],
			"济宁": [116.59,	35.38],
			"泰安": [117.13,	36.18],
			"威海": [122.1,		37.5],
			"日照": [119.46,	35.42],
			"滨州": [118.03,	37.36],
			"德州": [116.29,	37.45],
			"聊城": [115.97,	36.45],
			"临沂": [118.35,	35.05],
			"菏泽": [115.43,	35.24],
			"莱芜": [117.67,	36.19],
		};
	}else if(map_name == "华东"){
		pinyin_map_name = "huadong";
		geoCoordMap = {
			"江苏" : [120.0586,	32.915],
			"浙江" : [120.498,	29.0918],
			"安徽" : [117.2461,	32.0361],
			"上海" : [121.4648,	31.2891],
			"福建" : [118.3008,	25.9277],
		};
	}else if(map_name == "华北"){
		pinyin_map_name = "huabei";
		geoCoordMap = {
			"北京" : [116.4551, 40.2539],
			"天津" : [117.4219, 39.4189],
			"河北" : [115.4004, 37.9688],
			"山西" : [112.4121, 37.6611],
			"内蒙" : [106.5977, 40.3408],
		};
	}else if(map_name == "华中"){
		pinyin_map_name = "huazhong";
		geoCoordMap = {
			"湖北" : [112.2363, 31.1572],
			"湖南" : [111.5332, 27.3779],
			"河南" : [113.4668, 33.8818],
		};
	}
	return pinyin_map_name+";"+JSON.stringify(geoCoordMap);
}