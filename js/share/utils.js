/**
 * 獲取同樣tag的 回傳物件
 * @param {any} type
 */
function GetValueByTagName(type = 'input') {
    var ids = document.getElementsByTagName(type);
    let data = {};
    for (var i = 0; i < ids.length; i++) {
        if (ids[i].type !== 'radio') {
            data[ids[i].id] = ids[i].value;
        }
    }
    return data;
}

function GetAllInputValue() {
    var ids = document.getElementsByTagName('input');
    let data = {};
    for (var i = 0; i < ids.length; i++) {
        if (ids[i].type == 'radio') {
            if (ids[i].checked) {
                data[ids[i].name] = ids[i].value;
            }
        }
        if(ids[i].type == 'checkbox'){
            if (ids[i].checked) {
            data[ids[i].name] += ids[i].value;
            }
        } else {
            if (!ids[i].disabled) {
                data[ids[i].id] = ids[i].value;
            }
        }
    }
    return data;
}

function HttpRequest(url, method = 'post') {
    var paremeters = GetAllInputValue();
    if (method == 'post') {
        const result = httpPost(url, paremeters);
        return result;
    } else {
        const result = httpGet(url, paremeters);
        return result;
    }
}


/**
 * 清除input值 1.不清除disbled屬性的input, 2.不清除Radio型態的值
 */
function ClearInput() {
    var ids = document.getElementsByTagName('input');
    for (var i = 0; i < ids.length; i++) {
        if (ids[i].disabled) {

        } else {
            if (ids[i].type == 'radio') {

            }
            else {
                ids[i].value = '';
            }
        }
    }
}

/**
 * 取得同樣name的數值 包成陣列
 * @param {any} name
 */
function GetValueByName(name) {
    let elements = document.getElementsByName(name);
    let values = [];
    if (elements.length > 0) {
        elements.forEach(x => {
            values.push(x.value)
        });
        return values;
    } else {
        return [];
    }
}


function hideValidateText(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById(id).innerHTML = "";
}

function ShowValidateText(id, text) {
    document.getElementById(id).style.display = '';
    document.getElementById(id).innerHTML = text;
}

function HidePointerEvent(id) {
    document.getElementById(id).style = "pointer-events:none";

}

function ShowPointerEvent(id) {
    document.getElementById(id).style = "pointer-events:all";
}

function AddCSSClass(id, className) {
    document.getElementById(id).classList.add(className);
}

function RemoveCSSClass(id, className) {
    document.getElementById(id).classList.remove(className);
}

function SetEnable(id) {
    document.getElementById(id).disabled = false;
}

function SetDisable(id) {
    document.getElementById(id).disabled = true;
}

//判斷是否為空值
function VaslidateNull(value) {
    if (_.isNull(value))
        return true;
    else
        return false;
}

//長度
function ValidateLength(value, min, max) {
    if (value.length >= min && value.length <= max)
        return true;
    else
        return false;
}
//型態  
function ValidateType(value) {
    if (_.isString(value)) {
        return true;
    }
    else
        return false;
}

//判斷email格式
function ValidateEmail(value) {

    return validator.isEmail(value);

    //正規表達式
    //return string(value)
    //    .tolowercase()
    //    .match(
    //        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-za-z\-0-9]+\.)+[a-za-z]{2,}))$/
    //    );
}

//判斷是否為純中文
function ValidatePureChinese(value) {
    var reg = /^[\u4E00-\u9FA5]+$/
    if (reg.test(value)) {
        return true
    } else {
        return false
    }
}

//判斷字串長度
function ValidateLength(value, min, max) {
    return validator.isLength(value, { min: min, max: max });
}

//判斷字串是否包含英大小寫和數字
function ValidateAlphanumeric(value) {
    return validator.isAlphanumeric(value);
}


//判斷是否為手機格式
function ValidatePhone(value) {
    return String(value)
        .match(
            /^09[0-9]{8}$/
        );
    //另外的表達式 /^09\d{2}(\d{6}|-\d{3}-\d{3})$/   
}

//判斷密碼是否相同
function ValidatePasswordMatch(password, cpassword) {
    return _.isEqual(password, cpassword);
}

//判斷是否為日期
function ValidateIsDate(date) {
    return validator.isDate(date);
}

/* 判別起訖日期規則 */
function CheckDate(startdate, enddate) {
    var start = moment(startdate);
    var end = moment(enddate);

    if (end <= start) {
        return false;
    } else {
        return true;
    }
}

/**
 * Copy Clipboard For Text
 * @param {any} id
 */
function Copy(id) {
    var copyText = document.getElementById(id).innerHTML;
    navigator.clipboard.writeText(copyText);
}

