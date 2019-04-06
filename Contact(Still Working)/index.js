import React from 'react';

const Contact = props => (
    <div className="container">
        <section id="contact_sec" class="contact-sec sec-pad-top-sm">
            <h2 class="mb-35">contact</h2>
            <div class="row">
                <div id="form_card_height" class="col-sm-7 mb-30">
                    <div class="mdl-card mdl-shadow--2dp" data-ng-controller="ContactController">
                        <h4 class="mb-10 font-unsetcase">Hey <span data-ng-bind="formData.inputName||'There'">There</span>, happy to hear from you.</h4>
                        <form data-ng-submit="submit(contactform, $event)" name="contactform" method="post" class=" form-horizontal mb-30" role="form">
                            <div class="form-group" data-ng-class="{ 'has-error': contactform.inputName.$invalid && submitted }">
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input autocomplete="off" data-ng-model="formData.inputName" class="mdl-textfield__input" type="text" id="inputName" name="inputName" required>
                                        <label class="mdl-textfield__label" for="inputName">name*</label>
												</div>
                                </div>
                                <div class="form-group" data-ng-class="{ 'has-error': contactform.inputEmail.$invalid && submitted }">
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input autocomplete="off" data-ng-model="formData.inputEmail" class="mdl-textfield__input" type="email" id="inputEmail" name="inputEmail" required>
                                            <label class="mdl-textfield__label" for="inputEmail">email*</label>
												</div>
                                    </div>
                                    <div class="form-group" data-ng-class="{ 'has-error': contactform.inputMessage.$invalid && submitted }">
                                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                            <textarea
                                                data-ng-model="formData.inputMessage"
                                                class="mdl-textfield__input" rows="3" id="inputMessage" name="inputMessage" required></textarea>
                                            <label class="mdl-textfield__label" for="inputMessage">message*</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="align-center">
                                            <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  bg-blue font-white" data-ng-disabled="submitButtonDisabled">
                                                submit
													</button>
                                        </div>
                                    </div>
										</form>

                            </div>
								</div>
                        <div class="col-sm-5 mb-30">
                            <div class="mdl-card mdl-shadow--2dp pa-0">
                                <div id="map_canvas"></div>
                            </div>
                        </div>
                    </div>
</section>
            </div>