$(document).ready(function() {

    // validate create Pokemon

    $('.save').on('click', function(e){
        e.preventDefault();
        const name = $('.name').val();
        const photo = $('.photo').val();
        const region = $('.regions-select').val();
        const type = $('.types-select').val();

        if(name === '' || photo === '' || region == 0 || type == 0 ){
            $('.name').addClass('validate').attr('placeholder', 'you must enter a movie name')
            $('.photo').addClass('validate').attr('placeholder', 'you must enter a image');
            $('.regions-select').addClass('validate');
            $('.types-select').addClass('validate');

        }else{
            $('.name').addClass('validate-success');
            $('.photo').addClass('validate-success');
            $('.regions-select').addClass('validate-success');
            $('.types-select').addClass('validate-success');

            $(this).closest('.form-save').submit();

        }
    });

    // validate Regions

    $('.save-region').on('click', function(e){
        e.preventDefault();
        const name = $('.name').val();
        console.log(name)
        if(name === ''){
            $('.name').addClass('validate').attr('placeholder', 'you must enter a name');
        }else{
            $('.name').addClass('validate-success');
            $(this).closest('.form-save-regions').submit();
        }
    });

    // validate Types

    $('.save-type').on('click', function(e){
        e.preventDefault();
        const name = $('.name').val();
        console.log(name)
        if(name === ''){
            $('.name').addClass('validate').attr('placeholder', 'you must enter a name');
        }else{
            $('.name').addClass('validate-success');
            $(this).closest('.form-save-types').submit();
        }
    });



    // validate name filter

    $('.btn-filter-name').on('click', function(e){
        e.preventDefault();
        const name = $('.name').val();
        console.log(name)
        if(name === ''){
            $('.name').addClass('validate').attr('placeholder', 'you must enter a name');
        }else{
            $('.name').addClass('validate-success');
            $(this).closest('.form-filter-name').submit();
        }
    });

    // validate region filter

    $('.btn-filter-region').on('click', function(e){
        e.preventDefault();
        const region = $('.region').val();
        if(region == 0){
            $('.region').addClass('validate').attr('placeholder', 'you must select a region');
        }else{
            $('.region').addClass('validate-success');
            $(this).closest('.form-filter-region').submit();
        }
    });

});