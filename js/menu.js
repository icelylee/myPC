/**
 * Created by icely on 16/10/12.
 */
var oList=document.getElementById('list');
var aLi=oList.getElementsByTagName('li');
var aHideMenu=utils.getByClass('hideMenu',oList);
/*
    oList.getElementsByClassName('hideMenu');
*/
    for(var i=0; i<aLi.length; i++){
        (function (index){//每一个形参都是私有变量；
            aLi[index].onmouseover=function(){
                for(var i=0; i<aLi.length; i++){
                    aLi[i].style.background='none';
                    aHideMenu[i].style.display='none';
                }
                this.style.background='white';
                aHideMenu[index].style.display='block';
            };
            aLi[index].onmouseout=function(){
                for(var i=0; i<aLi.length; i++){
                    aLi[i].style.background='none';
                    aHideMenu[i].style.display='none';
                }
            }
        })(i)
    }
