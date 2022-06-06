KindEditor.plugin("kityformula", function(e){
    var self = this, name = 'kityformula';
    var jme_fid = "kityformula_" + Math.ceil(Math.random()*100) ;
    self.clickToolbar(name, function() {
        var dialog = self.createDialog({
            title : '插入公式',
            width : 785,
            height :390,
            onShow:function(){
              alert('hahaha');
            },
            yesBtn:{
                name:"保存",
                click:function (e) {

                    //var thedoc = document.frames ? document.frames(jme_fid).document : getIFrameDOM(jme_fid);
                    var ifr = document.getElementById(jme_fid).contentWindow.onok(self);
                    //document.getElementById(jme_fid).contentWindow.aaa();


                    //ifr.contentWindow.aaa();
                    //console.log(thedoc);
                    //document.getElementById(jme_fid).contentWindow.onok(self);

                    // var mathHTML = '<span class="" style="font-size:'
                            //     + '20px' + ';" >' + $("#jme-math",thedoc).html() + '</span><span> </span>';

                    setTimeout(function () {
                        self.hideDialog().focus();
                    },100);

                    return true;
                }
            },

            body:'<div style="width:800px;height:600px;">' +
                     '<iframe id="'+jme_fid+'" style="width:785px;height:390px;" frameborder="no" src=" '+ KindEditor.basePath + 'plugins/kityformula/kityFormulaDialog.html"></iframe></div>'


            // body : '<div style="width:400px;height:400px;">' +
            // '<iframe id="math_frame" style="width:400px;height:400px;" frameborder="no" src="'
            // + KindEditor.basePath + 'plugins/jme/dialogs/mathdialog.html"></iframe></div>',
            // yesBtn : {
            //     name : '确定',
            //     click : function(e) {
            //         var thedoc = document.frames ? document.frames('math_frame').document : getIFrameDOM("math_frame");
            //         var mathHTML = '<span class="mathquill-rendered-math" style="font-size:'
            //             + '20px' + ';" >' + $("#jme-math",thedoc).html() + '</span><span> </span>';
            //         self.insertHtml(mathHTML).hideDialog().focus();
            //         return;
            //     }
            // }
        });
    });

    // icons: 'kityformula', requires: ["dialog"],
    // init: function(editor) {
    //     editor.addCommand("kityformula", new CKEDITOR.dialogCommand("kityformula"));
    //     editor.ui.addButton("kityformula", {
    //         label: "数学公式",//调用dialog时显示的名称
    //         command: "kityformula",
    //         icon: this.path + "/icons/kityformula.png"//在toolbar中的图标
    //     });
    //
    //     if ( editor.contextMenu ) {
    //         editor.addMenuGroup( 'kityMathGroup' );
    //         editor.addMenuItem( 'mathEditorItem', {
    //             label: '编辑数学公式',
    //             icon: this.path + "/icons/kityformula.png",//在toolbar中的图标
    //             command: 'kityformula',
    //             group: 'kityMathGroup'
    //         });
    //
    //         editor.contextMenu.addListener( function( element ) {
    //             if ( element.getAscendant( 'img', true ) ) {
    //                 return { mathEditorItem: CKEDITOR.TRISTATE_OFF };
    //             }
    //         });
    //     }
    //
    //     CKEDITOR.dialog.add("kityformula", this.path + "dialogs/kityformula.js")
    //
    // }

});




function getIFrameDOM(fid){
    var fm = getIFrame(fid);
    return fm.document||fm.contentDocument;
}

function getIFrame(fid){
    return document.getElementById(fid)||document.frames[fid];
}