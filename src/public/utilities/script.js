$(document).ready(function(){

    var field = 1;
    var attribute = 1;
    var variant = 1;
    var variationCounterArray = [];

    $('#showProducts').click(function(){
        // console.log('showProduct btn clicked');
    });


    // ********************************** Dynamically adding the meta-fields function STARTS ***************************************************
    
    /**
     * This function adds the particular Additional field (meta field) as per desired by the user.
     */

    $("#addFieldsButton").click(function() {
        

        var html = '';
        html += '<div id="field-'+field+'" >';
        html += '<div class="row">\
                    <div class="col">\
                        <input type="text" class="form-control" name="metaLabel[]" placeholder="Label" aria-label="Label name">\
                    </div>\
                    <div class="col">\
                        <input type="text" class="form-control" name="metaValue[]" placeholder="Value" aria-label="Value name">\
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

        var attr = 1;
        variationCounterArray.push(1);


        var html = '';
        html += '<div id="variant-'+variant+'" >';
        html += '<div id="attributes-'+variant+'" >\
                    <div id="attribute-'+attr+'">\
                        <div class="row" id="attribute-'+variant+'-'+variationCounterArray[variant-1]+'">\
                            <div class="col">\
                                <input type="text" class="form-control" name="variationName['+variant+'][]" placeholder="Attribute Name" aria-label="attributeName">\
                            </div>\
                            <div class="col">\
                                <input type="text" class="form-control" name="variationValue['+variant+'][]" placeholder="Attribute Value" aria-label="attributeValue">\
                            </div>\
                            <div class="col">\
                            <input type="button" class="deleteAttributeButton form-control btn btn-danger" data-id="deleteAttribute-'+variant+'-'+variationCounterArray[variant-1]+'" value="delete" aria-label="Value name">\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                    <br>\
                    <div class="row">\
                        <div class="col">\
                            <input type="text" class="form-control" name="variationPrice[]" placeholder="Price" aria-label="price">\
                        </div>\
                        <div class="col">\
                            <input type="button" class="addAttribute form-control btn btn-success" data-id="addAttribute-'+variant+'-'+attr+'" value="Add Attributes" aria-label="addAttribute">\
                        </div>\
                        <div class="col">\
                            <input type="button" class="deleteVariantButton form-control btn btn-danger" data-id="deleteVariant-'+variant+'-'+attr+'" value="Delete Variant" aria-label="Delete variant">\
                        </div>\
                    </div><br><br>\
                        ';
/**
 * line 80 : data-id="addAttribute-'+attribute+'"  REPLACE "attribute" with "variant" both are same thing...  
 * and added "attr" 
 * to make data-id="addAttribute-'+variant+'-'+attr+'"
 */

        html += '</div>';

        $('#addedVariations').append(html);

        // attribute++;
        variant++;
        
    });
// ********************************** Dynamically adding the variations function ENDS ***************************************************


// ********************************** Deleting Meta Fields function STARTS ***************************************************
    /**
     * This function deletes the particular meta-field.
     */

    $('#addedFields').on('click','.deleteButton', function(){
        var id = $(this).data('id');
        var idNumber = id.split('-');
        var fieldId = '#field-'+idNumber[1];
        $(fieldId).remove();


    
    });
// ********************************** Deleting Meta Fields function ENDS ***************************************************


    $('#addedVariations').on('click','.addAttribute', function(){

        var id = $(this).data('id');
        var idNumber = id.split('-');
        var variant = idNumber[1];

        variationCounterArray[variant-1]++;
        
        var html = '';
        html += '\
                    <div class="row" id="attribute-'+variant+'-'+variationCounterArray[variant-1]+'">\
                        <div class="col">\
                            <input type="text" class="form-control" name="variationName['+variant+'][]" placeholder="Attribute Name" aria-label="attributeName">\
                        </div>\
                        <div class="col">\
                            <input type="text" class="form-control" name="variationValue['+variant+'][]" placeholder="Attribute Value" aria-label="attributeValue">\
                        </div>\
                        <div class="col">\
                        <input type="button" class="deleteAttributeButton form-control btn btn-danger" data-id="deleteAttribute-'+variant+'-'+variationCounterArray[variant-1]+'" value="delete" aria-label="deleteAttribute">\
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
        var attributesId = '#attributes-'+variant;
        

        $(attributesId).append(html);

    });




    // ********************************** Deleting Attribute function STARTS ***************************************************
    /**
     * This function deletes the particular attribute within a variation.
     */

     $('#addedVariations').on('click','.deleteAttributeButton', function(){
        var id = $(this).data('id');
        var idNumber = id.split('-');
        var variant = idNumber[1];
        var attribute = idNumber[2];
        var fieldId = '#attribute-'+variant+'-'+attribute;

        $(fieldId).remove();

    });
// ********************************** Deleting Attribute function ENDS ***************************************************



// ********************************** Deleting Variant function STARTS ***************************************************
    /**
     * This function deletes the particular variation.
     */

    $('#addedVariations').on('click','.deleteVariantButton', function(){
        var id = $(this).data('id');
        var idNumber = id.split('-');
        var fieldId = '#variant-'+idNumber[1];
        $(fieldId).remove();

    });
// ********************************** Deleting Variant function ENDS ***************************************************


});


