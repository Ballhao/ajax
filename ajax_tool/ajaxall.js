/**
 * ajax工具函数
 * @param {*} url
 * @param {*} data(key1=value1&&key2=value2)
 * @param {*} success
 */
   //get 请求
   function get(url,data,success){
    //创建异步对象
    var xhr = new XMLHttpRequest();
    //设置请求行
    if(data){
        url+='?';
        url+=data;
    }
    xhr.open('get',url);
   
    //请求头(get可以忽略)
    //回调函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4&&xhr.status==200){
            console.log(xhr.responseText);
            success(xhr.responseText);
           
            // //json
            // console.log(JSON.parse(xhr.responseText));
            // //XML
            // console.log(xhr.responseXML);
        }
    }
    //发送数据
    xhr.send();
}

/**
 * post工具函数
 * @param {*} url 
 * @param {*} data(key1=value1&&key2=value2) 
 * @param {*} success 
 */
//post请求
function post(url,data,success) { 
    //创建异步对象
   var xhr = new XMLHttpRequest();
   //设置请求行
  
   xhr.open('post',url);
  
   //请求头(get可以忽略)
   if(data){
      xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
   }
   //回调函数
   xhr.onreadystatechange = function(){
       if(xhr.readyState == 4&&xhr.status==200){
           console.log(xhr.responseText);
           success(xhr.responseText);
          
           // //json
           // console.log(JSON.parse(xhr.responseText));
           // //XML
           // console.log(xhr.responseXML);
       }
   }
    //发送数据
    xhr.send(data);
}
//////////////////////
//post和get结合并只传一个参数(对象)url data type success
function ajax_text(option) { 
    //创建异步对象
   var xhr = new XMLHttpRequest();
   //设置请求行
    if(option.type == 'post'&& option.data){
        option.url+='?';
        option.url+=option.data;
        option.data=null;
    }
    xhr.open(option.type,option.url);
  
  
   //请求头(get可以忽略)
   if(option.type == 'post'&& option.data){
      xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
   }
   //回调函数
   xhr.onreadystatechange = function(){
       if(xhr.readyState == 4&&xhr.status==200){
          
        var type = xhr.getResponseHeader('Content-Type');
        //是否为JSON
        if(type.indexOf('json') != -1){
            option.success(JSON.parse(xhr.responseText));
        }
        //是否为XML
        else if(type.indexOf('xml') != -1){
            option.success(xhr.responseXML);
        }   
        //普通字符串
        else{
            option.success(xhr.responseText);
        }
        
         
       }
   }
    //发送数据
    xhr.send(option.data);
}
