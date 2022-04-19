$(document).ready(function(){

    var field = 1;
    var attribute = 1;
    var variant = 1;
    var variation = 1;


    $('#showProducts').click(function(){
        // console.log('showProduct btn clicked');
    });


    // ********************************** Dynamically adding the meta-fields function STARTS ***************************************************
    
    /**
     * This function adds the particular Additional field (meta field) as per desired by the user.
     */

    $("#addFieldsButton").click(function() {
        

        // $("#addAttributesButton").show();

        var html = '';
        html += '<div id="field-'+field+'" >';
        html += '<div class="row">\
                    <div class="col">\
                        <input type="text" class="form-control" placeholder="Label" aria-label="Label name">\
                    </div>\
                    <div class="col">\
                        <input type="text" class="form-control" placeholder="Value" aria-label="Value name">\
                    </div>\
                    <div class="col">\
                        <input type="button" class="deleteButton form-control btn btn-danger" data-id="deleteField-'+field+'" value="delete" aria-label="Value name">\
                    </div>\
                 </div><br>';


        html += '</div>';

        $('#addedFields').append(html);

        field++;
    });
// ********************************** Dynamically adding the meta-field function ENDS ***************************************************




// ********************************** Dynamically adding the variations function STARTS ***************************************************
    /**
     * This function adds the particular variation desired by the user.
     */

    $("#addVariations").click(function() {
        var html = '';
        html += '<div id="variant-'+variant+'" >';
        html += '<div id="variations-'+variation+'">\
                    <div class="row">\
                        <div class="col">\
                            <input type="text" class="form-control" placeholder="Attribute Name" aria-label="attributeName">\
                        </div>\
                        <div class="col">\
                            <input type="text" class="form-control" placeholder="Attribute Value" aria-label="attributeValue">\
                        </div>\
                        <div class="col">\
                        <input type="button" class="deleteButton form-control btn btn-danger" data-id="deleteAttribute-'+attribute+'" value="delete" aria-label="Value name">\
                        </div>\
                    </div>\
                </div><br>\
                    <div class="row">\
                        <div class="col">\
                            <input type="text" class="form-control" placeholder="Price" aria-label="price">\
                        </div>\
                        <div class="col">\
                            <input type="button" class="addAttribute form-control btn btn-success" data-id="addAttribute-'+attribute+'" value="Add Attributes" aria-label="addAttribute">\
                        </div>\
                        <div class="col">\
                            <input type="button" class="deleteVariantButton form-control btn btn-danger" data-id="deleteVariant-'+variant+'" value="Delete Variant" aria-label="Delete variant">\
                        </div>\
                    </div><br><br>\
                        ';


        html += '</div>';

        $('#addedVariations').append(html);

        attribute++;
        variant++;
        variation++;
    });
// ********************************** Dynamically adding the variations function ENDS ***************************************************


// ********************************** Deleting Meta Fields function STARTS ***************************************************
    /**
     * This function deletes the particular meta-field.
     */

    $('#addedFields').on('click','.deleteButton', function(){
        console.log('delete buttonclicked');
        var id = $(this).data('id');
        // console.log(pid);
        var idNumber = id.split('-');
        var fieldId = '#field-'+idNumber[1];
        // console.log(fieldId);
        $(fieldId).remove();


    
    });
// ********************************** Deleting Meta Fields function ENDS ***************************************************


    $('#addedVariations').on('click','.addAttribute', function(){
        // console.log('addvaraition clkd');

        var id = $(this).data('id');
        // console.log(id);
        var idNumber = id.split('-');
        var attribute = idNumber[1];

        var html = '';
        html += '\
                    <div class="row">\
                        <div class="col">\
                            <input type="text" class="form-control" placeholder="Attribute Name" aria-label="attributeName">\
                        </div>\
                        <div class="col">\
                            <input type="text" class="form-control" placeholder="Attribute Value" aria-label="attributeValue">\
                        </div>\
                        <div class="col">\
                        <input type="button" class="deleteButton form-control btn btn-danger" data-id="deleteAttribute-'+attribute+'" value="delete" aria-label="deleteAttribute">\
                        </div>\
                    </div>\
        ';
        /**
         * 
         * 
         * 
         * do tried with a constant...
         * 
         * do the dynamics...
         */
        var variationId = '#variations-1';

        $(variationId).append(html);

    });


// ********************************** Deleting Variant function STARTS ***************************************************
    /**
     * This function deletes the particular variation.
     */

    $('#addedVariations').on('click','.deleteVariantButton', function(){
        console.log('deleteVariantButton');
        var id = $(this).data('id');
        // console.log(pid);
        var idNumber = id.split('-');
        var fieldId = '#variant-'+idNumber[1];
        // console.log(fieldId);
        $(fieldId).remove();


    
    });
// ********************************** Deleting Variant function ENDS ***************************************************


});


