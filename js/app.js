function AssortedUtil(){
}

AssortedUtil.dispatchEvent = function(target, name, detailData) {
    var event = new CustomEvent(name, {'detail': detailData} );
    target.dispatchEvent(event);
};

var LmConstants = {}; 
LmConstants.SUBCATEGORY_CONTENT_HOLDER = 'subcategory_content_container';

function LmApp() {
};

LmApp.populateSubcategories = function(category) {
    var data = DataManager.getSubCategories(category);
    console.log(data);

    if (! data) {
        return;
    }

    var html = '';
    for (var prop in data) {
        if (! data.hasOwnProperty(prop)) {
            continue;
        } 
        var label = data[prop]['label'];

        html = html + ''
            + '<div class="col-sm-12 col-md-6">'
            + '    <div class="form-check">' 
            + '        <label class="form-check-label">'
            + '            <input type="checkbox" class="form-check-input" value="' + prop + '">' + label
            + '        </label>'
            + '    </div>'
            + '</div>';
    }

    document.getElementById(LmConstants.SUBCATEGORY_CONTENT_HOLDER).innerHTML = html;
};

LmApp.populateSubcategories('category001');
document.getElementById('subcategory_modal').style.display = 'block';

