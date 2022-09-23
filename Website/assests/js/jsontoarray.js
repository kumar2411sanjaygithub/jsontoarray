
    function CopyEditor(id)
    {
        // alert(id)
        let editor = ace.edit("editor");
        let editor1Data = editor.getValue();
        let editor2 = ace.edit("editor2");
        let editor2Data = editor2.getValue();
        if(id==1)
        {
            // editor.setValue('');
            // copyToClipboard(editor1Data)
            // alert(editor1Data)
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val(editor1Data).select();
            document.execCommand("copy");
            $temp.remove();
            // navigator.clipboard.writeText(editor1Data);
        }
        else if(id==2)
        {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val(editor2Data).select();
            document.execCommand("copy");
            $temp.remove();
        }
    }
    function ClearEditor(id)
    {
        let editor = ace.edit("editor");
        let editor2 = ace.edit("editor2");
        if(id==1)
        {
            editor.setValue('');
        }
        else if(id==2)
        {
            editor2.setValue('');
        }
    }
    function SampleJSON()
    {
        let editor = ace.edit("editor");
        let json ={
            "schools":[{
                "id":"SH001",
                "name":"KVS Delhi"
            },
            {
                "id":"SH002",
                "name":"DPS Delhi"
            },
            {
                "id":"SH003",
                "name":"Jindal Group Delhi"
            },
            {
                "id":"SH004",
                "name":"Convent School Delhi"
            },
            {
                "id":"SH005",
                "name":"Delhi Govt Delhi"
            }]
        };
        // alert(json)
        editor.setValue(JSON.stringify((json), null, 4));
    }

// For Upload File Json file
function previewFile(input){
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.json)$/;
    if (regex.test($("#imageUpload").val().toLowerCase())) {
        let editor = ace.edit("editor");
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                // $("#txtXml").val(e.target.result);
                editor.session.setValue(e.target.result);
                editor.clearSelection();
            }
            reader.readAsText($("#imageUpload")[0].files[0]);
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid JSON file.");
    }
}

//
$( "#target" ).submit(async function( event ) {
    // alert( "Handler for .submit() called." );
    event.preventDefault();
    // const url = 'https://raw.githubusercontent.com/benjamin-hg-marchant/datasets/main/modis_cloud_phase_time_series_analysis.json'
    const url = $('#url').val();
    let editor = ace.edit("editor");
    const printdata = async () => {
        const response = await fetch(url);
        var data = await response.json();
        return data;
      };
    try{
        editor.session.setValue(JSON.stringify(await printdata(), null, 4));
        editor.clearSelection();
        $('#url').val('')
        $("#exampleModal").modal('hide');
    } catch (e) {
        $('#url').val('')
        $("#exampleModal").modal('hide');
        $("#dangMsg").html("<span class='text-center'>"+e.message+"</span");
        $('#dangeralertMsg').show()
        setTimeout(function(){
            $('#dangeralertMsg').hide();
            // $("#dangeralertMsg").append("");
        },2000)  
    }
});
