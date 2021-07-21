<style lang='less' scoped>
  @import "../../static/styles/color";
  .hex-flex{color:#3B4251;background-color:#fff;padding: 40px 40px 40px;font-size: 13px;}
  img{    padding-right: 10px;width: unset;}
  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
.container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.aml {
    background: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
  #aml {
    display: block;
}
.content-box-container {
    width: 95%;
    margin: 0 auto;
}
.reminder {
    margin-top: -80px;
    margin-bottom: 40px;
}
.aml .headline, .aml h1 {
    font-weight: 700;
    color: #11a2a4;
}

.headline {
    font-size: 2em;
}
h1, h2, h3, h4, h5, h6 {
    margin-bottom: .7em;}
.fix {
    overflow: hidden;
    margin: 3rem 0;
}
.fix .tl {
    display: block;
    margin-bottom: 5px;
    text-align: left;
    float: left;
    width: 200px;
    font-weight: 700;
}
.red {
    color: #f73c45;
}
.fix .cell {
    float: left;
    position: relative;
    width: 30%;
}
.form-control, output {
    display: block;
    line-height: 1.42857143;
    color: #555;
}
.form-control {
    width: 100%;
    padding: 6px 12px;
    background-color: #fff;
    height: 40px;
    border: 1px solid rgba(21,21,21,.538);
    border-radius: 0;
    box-shadow: none;
    font-size: 13px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
}
.issue_select, .issue_select:focus {
    box-shadow: none;
}
.issue_select {
    height: 40px;
    border: 1px solid rgba(21,21,21,.538);
    border-radius: 0;
    font-size: 13px;
    width: 100%;
}
textarea {
    width: 100%;
    border: 1px solid rgba(21,21,21,.538);
    height: 213px;
    resize: none;
    overflow: auto;
    padding: 18px 15px;
}
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}

#btn, #btn2 {
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 5px;
}
#btn {
  padding: 8px 10px;
    margin-right: 5px;
    box-shadow: 2px 2px 0 #666;
    font-weight: 600;
}
#btn:active{box-shadow: 2px 2px 0 #666 inset; }
button, html input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
}
input[type=file] {
    display: block;
}
#file-1 {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
}
table {
    margin-top: 10px;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    background-color: transparent;
}
.aml p {
    color: #333;
    font-size: 1em;
    text-align: left;
    line-height: inherit;
    letter-spacing: unset;
    max-width: 100%;
}
.aml .mar2 {
    margin-top: 15px;
    color: red;
    font-size: 15px;
}
.about p {
    margin: 0 auto;
}
.btn {
    padding: 10px 15px;
    border-radius: 6px;
    font-size: 1rem;
}
.btn[disabled] {
    pointer-events: none;
    cursor: not-allowed;
    opacity: .65;
    box-shadow: none;
}
p .bg-blue {
    background: #11a2a4;
    color: #fff;
}
.reminder span {
    color: #11a2a4;
}
.btn-group-vertical>.btn-group:after, .btn-toolbar:after, .clearfix:after, .container-fluid:after, .container:after, .dl-horizontal dd:after, .form-horizontal .form-group:after, .modal-footer:after, .modal-header:after, .nav:after, .navbar-collapse:after, .navbar-header:after, .navbar:after, .pager:after, .panel-body:after, .row:after {
    clear: both;}
.content-box-container {
    width: 95%;
    margin: 0 auto;
}
.form-control:focus {
    box-shadow: none;
    border-color: #cf5c65;
}
select:focus {
    outline: none;
    box-shadow: none;
    border-color: #cf5c65;
}
textarea:focus {
    border-color: #64C2C3;
}
@media (min-width: 768px){
.col-sm-12 {
    width: 100%;
}}
@media (min-width: 768px){
.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
    float: left;
}}
</style>

<template>
  <div class="hex-flex">
    <div class="auth hex-flex_auto">
        <section id="aml" class="section container-fluid chapter about aml">
            <div class="row align-items-center justify-content-center content-box-container">
                <div class="col-sm-12 mb-25" style="margin-top: 50px;">
                    <div class="reminder">You can submit a ticket or contact our customer support email <span> support@elitex.io </span>for any inquiry.
                    </div>
                    <h1 class="headline aos-init aos-animate">Submit a Ticket</h1>
                    <form id="support" enctype="multipart/form-data" :action="$store.state.hex_config.ilexsupport" method="POST" class="form1">
                        <input name="filelist" id="filelist" type="hidden">
                        <div class="fix">
                            <span class="tl">Contact Name<span class="red">*</span></span>
                            <div class="cell">
                                <div class="con">
                                    <input type="text" name="name" id="name" datatype="*" nullmsg="Contact Name cannot be blank" class="form-control  border_no">
                                    <span style="color: red;display:none;">Please input valid Contact Name.</span>
                                </div>
                                <div class="tips newtips">
                                    <div class="Validform_checktip"></div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="fix">
                        <span class="tl">Email<span class="red">*</span></span>
                        <div class="cell">
                            <div class="con">
                                <input type="text" name="email" datatype="e" nullmsg="Email cannot be blank" errormsg="E-mail format error" class="form-control border_no">
                                <span style="color: red;display:none;">Please input valid email address.</span>
                            </div>
                            <div class="tips newtips">
                                <div class="Validform_checktip">
                                </div>
                            </div>
                        </div>
                        <div class="clear"></div>
                        </div>
                        <div class="fix">
                            <span class="tl">Select issue<span class="red">*</span></span>
                            <div class="cell">
                                <div class="con">
                                    <select name="issue" id="" class=" border_no issue_select">
                                        <option value="" style="display: none;">Select issue</option>
                                        <option value="User id &amp; password" class="issue_select_option">User id &amp; password</option>
                                        <option value="Account verification" class="issue_select_option">Account verification</option>
                                        <option value="Deposit/Withdraw" class="issue_select_option">Deposit/Withdraw</option>
                                        <option value="Trade" class="issue_select_option">Trade</option>
                                        <option value="Security" class="issue_select_option">Security</option>
                                        <option value="Margin" class="issue_select_option">Margin</option>
                                        <option value="Token Listing" class="issue_select_option">Token Listing</option>
                                        <option value="C2C Exchange" class="issue_select_option">C2C Exchange</option>
                                        <option value="Others" class="issue_select_option">Others</option>
                                    </select>
                                    <span style="color: red;display:none;">Please select issue.</span>
                                </div>
                                <div class="tips newtips">
                                    <div class="Validform_checktip"></div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="fix">
                            <span class="tl">Subject<span class="red">*</span></span>
                            <div class="cell">
                                <div class="con">
                                    <input type="text" name="subject2" datatype="*" nullmsg="Subject cannot be blank" class="form-control  border_no" >
                                    <span style="color: red;display:none;">Please input valid Subject.</span>
                                </div>
                                <div class="tips newtips">
                                    <div class="Validform_checktip"></div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="fix">
                            <span class="tl"><span>Description</span><span class="red">*</span></span>
                            <div class="cell">
                                <div class="con">
                                    <textarea maxlength="500" rows="4" name="description" ></textarea>
                                    <span style="color: red;display:none;">Please input valid Description.</span>
                                </div>
                                <div class="tips newtips">
                                    <div class="Validform_checktip"></div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="fix">
                            <span class="tl">Upload File</span>
                            <div class="cell" style="width: 76%;">
                                <label>
                                    <input type="button" id="btn" value="Browse…" class="cusor">
                                    <input type="file" accept=".pdf, image/png, image/jpeg, image/jpg" name="file-1" id="file-1" class="cusor" style="width: 85px; height: 30px;">
                                </label>
                                <table id="uploadFile" style="display:none;">
                                    <tr>
                                        <img src="../../static/images/contactus/ffj.png" alt="" id="ffj" class="disno">
                                        <span id="text" style="color: rgb(132, 127, 124);"></span>
                                        <a>
                                            <img src="../../static/images/contactus/del.png" alt="" id="del" class="disno" style="width: 30px; height: 20px;">
                                        </a>
                                    </tr>
                                </table>
                                <p class="mar2">Allowed file type extensions are: jpeg, jpg, png, pdf.<br>Files must be at most 1MB.<br>Upload up to 5 files at most.</p>
                                <div class="tips newtips">
                                    <div class="Validform_checktip"></div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <p>
                            <button type="submit" disabled="disabled" class="btn bg-blue">Submit</button>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'contact',
    components: {},
    mounted() {},
  }
</script>
