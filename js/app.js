function AssortedUtil(){
}

AssortedUtil.dispatchEvent = function(target, name, detailData) {
    var event = new CustomEvent(name, {'detail': detailData} );
    target.dispatchEvent(event);
};

var LmConstants = {}; 
LmConstants.SUBCATEGORY_MODAL = '#subcategory_modal';
LmConstants.SUBCATEGORY_CONTENT_HOLDER = '#subcategory_content_container';
LmConstants.SUBCATEGORY_CLOSE = '#close_subcategory_btn';
LmConstants.CATEGORY_CONTENT_HOLDER = '#category_content';
LmConstants.CATEGORY_DROPDOWN = '#category';

// --------------------------------------------------------------------

function LmApp() {
};

LmApp.find = function(selector) {
    if (selector && selector.length > 1 && selector.startsWith('#')) {
        return window.document.getElementById(selector.substring(1));
    }
 
    return null;
};

$LM = LmApp.find;

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

    $LM(LmConstants.SUBCATEGORY_CONTENT_HOLDER).innerHTML = html;
};

LmApp.initCategoriesDropDown = function() {
    var data = DataManager.categoryMapping;
    console.log(data);

    if (! data) {
        return;
    }

    var html = '<ul class="lm-dropdown-content-list">';
    for (var prop in data) {
        if (! data.hasOwnProperty(prop)) {
            continue;
        } 
        var label = data[prop]['label'];

        html = html + ''
            + '<li class="lm-dropdown-content-list-item" '
            +   ' onclick="LmApp.openCategoriesDropDown(); LmApp.showSubcategoriesDialog(\'' + prop + '\')">' 
            +     label
            + '</li>';
    }
    html += '</ul>';

    $LM(LmConstants.CATEGORY_CONTENT_HOLDER).innerHTML = html;
};

LmApp.init = function() {
    LmApp.initCategoriesDropDown();

    window.onclick = function(evt) {
        //console.log(evt.target);
        var className = evt.target.className;

        // Check if category dropdown is open
        if (LmApp.isOpenCategoriesDropDown()) {
            // Check if something outside the dropdown is clicked
            if (className.indexOf('lm-dropdown') == -1) {
                LmApp.openCategoriesDropDown(false);
            }
        }
    }
};

/**
 * Show the subcategories dialog and show the subcategories
 * of the specified category
 * 
 * @param category category code
 */
LmApp.showSubcategoriesDialog = function(category) {
    LmApp.populateSubcategories(category);
    $LM(LmConstants.SUBCATEGORY_MODAL).style.display = 'block';
};

/**
 * Hide the subcategories dialog
 */
LmApp.hideSubcategoriesDialog = function() {
    $LM(LmConstants.SUBCATEGORY_MODAL).style.display = 'none';
};

/**
 * Open the category dropdown
 * 
 * @param flag toggle flag indicating whether to open or close
 */
LmApp.openCategoriesDropDown = function(flag) {
    var val = 'none';
    if (flag) {
        val = 'block';
    }
    $LM(LmConstants.CATEGORY_CONTENT_HOLDER).style.display = val;
};

/**
 * Checks if the category dropdown is open.
 * 
 * @return true when the dropdown is open; false, otherwise
 */
LmApp.isOpenCategoriesDropDown = function() {
    var flag = true;
    switch ($LM(LmConstants.CATEGORY_CONTENT_HOLDER).style.display) {
        case 'none':
        case null:
        case '':
            flag = false;
    }
    return flag;
};

$LM(LmConstants.SUBCATEGORY_CLOSE).onclick = function(evt){
    LmApp.hideSubcategoriesDialog();
};

$LM(LmConstants.CATEGORY_DROPDOWN).onclick = function(evt){
    var flag = LmApp.isOpenCategoriesDropDown();
    LmApp.openCategoriesDropDown(! flag);
};


$LM('#zip').onkeyup = function(evt) {
    var value = evt.target.value;
};

//LmApp.showSubcategoriesDialog('category001');

LmApp.init();


