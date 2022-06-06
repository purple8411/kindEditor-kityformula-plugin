KindEditor.dialog.add( 'jmeDialog', function( editor ) {
    return {
        title: "JMEditor " + JMEditor.versionName,
        minWidth: 500,
        minHeight: 300,
        contents: [
            {
                id: 'tab-basic',
                label: 'Editor',
                elements: [
                    {
                    	//mathquill-editable �ɱ༭
                    	//mathquill-rendered-math �Ѿ���Ⱦ
                    	//mathquill-embedded-latex ֻ����̬��Ⱦ
                        type: 'html',
                        //CKEDITOR.basePath
                        //jmeditor1.0/ckeditor/plugins/jme/dialogs/mathdialog.html
                        html: '<div style="width:500px;height:300px;"><iframe id="math_frame" style="width:500px;height:300px;" frameborder="no" src="' + CKEDITOR.basePath + 'plugins/jme/dialogs/mathdialog.html"></iframe></div>'
                    }   
                ]
            }
        ],
        onShow : function(){
        	//$("#jme-math",getIFrameDOM("math_frame")).mathquill("focus");
        },
        onOk: function() {
        	var thedoc = document.frames ? document.frames('math_frame').document : getIFrameDOM("math_frame");
        	var mathHTML = '<span class="mathquill-rendered-math" style="font-size:' + JMEditor.defaultFontSize + ';" >' + $("#jme-math",thedoc).html() + '</span><span>&nbsp;</span>';
            editor.insertHtml(mathHTML);
					return;
			
        }
    };
});

function getIFrameDOM(fid){
	var fm = getIFrame(fid);
	return fm.document||fm.contentDocument;
}
function getIFrame(fid){
	return document.getElementById(fid)||document.frames[fid];
}