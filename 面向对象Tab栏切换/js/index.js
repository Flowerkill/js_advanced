window.addEventListener("DOMContentLoaded", function() {
    var that;
    class Tab {
        constructor(id) {
                that = this;
                this.main = document.querySelector(id);

                this.addbtn = this.main.querySelector(".tabadd");
                this.ul = this.main.querySelector(".firstnav ul:first-child");
                this.tabscon = this.main.querySelector(".tabscon");
                this.init();
            }
            //初始化
        init() {
                this.updateNode();
                this.addbtn.onclick = this.addTab;
                for (var i = 0; i < this.lis.length; i++) {

                    this.lis[i].index = i;
                    this.lis[i].onclick = this.toggleTab;
                    this.removetab[i].onclick = this.removeTab;
                    this.spans[i].ondblclick = this.editTab;
                    this.cons[i].ondblclick = this.editTab;

                }

            }
            //获取所有的li 和section
        updateNode() {
                this.lis = this.main.querySelectorAll(".firstnav li");
                this.cons = this.main.querySelectorAll(".tabscon section");
                this.removetab = this.main.querySelectorAll(".iconfont");
                this.spans = this.main.querySelectorAll(".firstnav li span:first-child")
            }
            //1.切换功能
        toggleTab() {
                that.clearClass();
                this.className = "liactive";
                that.cons[this.index].className = "conactive";
            }
            //清除类名
        clearClass() {
                for (var i = 0; i < this.lis.length; i++) {
                    this.lis[i].className = "";
                    that.cons[i].className = "";
                }
            }
            //2.添加功能
        addTab() {
                that.clearClass();

                // console.log(that.ul);
                var random = Math.random();
                var li = ' <li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
                var section = '<section class="conactive">测试' + random + '</section>'
                that.ul.insertAdjacentHTML("beforeend", li);
                that.tabscon.insertAdjacentHTML("beforeend", section);
                that.init();
            }
            //3.删除功能
        removeTab(e) {
                e.stopPropagation();
                var index = this.parentNode.index;
                this.parentNode.remove();
                that.cons[index].remove();
                that.init();
                if (document.querySelector(".liactive")) return;
                index--;
                that.lis[index] && that.lis[index].click();


            }
            //4.修改功能
        editTab() {

            var value = this.innerHTML;
            console.log(value);


            this.innerHTML = "<input type='text' value='" + value + "' >";
            var input = this.children[0];
            input.select();
            input.onblur = function() {
                this.parentNode.innerHTML = input.value;
            }
            input.onkeyup = function(e) {
                if (e.keyCode === 13) {
                    this.blur();
                }
            }

        }
    }
    new Tab("#tab");
})