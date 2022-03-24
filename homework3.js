function getcommon(arr1,arr2){
var common=[];
var i,j;
for(i=0;i<arr1.length;i++){
    for(j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[i]){
            common.push(arr1[i]);
        }
    }
}
return common;
}
var arr1=[1,2,3]
var arr2=[100,2,1,10]
var commonelement=getcommon(arr1,arr2)











