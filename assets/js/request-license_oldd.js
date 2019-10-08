// Add the following code if you want the name of the file appear on select
$(document).ready(function () {
  function createName() {
    // $(document).find(".custom-file-input").on("change", function () {
    //   var fileName = $(this).val().split("\\").pop();
    //   $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    // });
    $(document).find(".custom-file-input").on('change', function(){
      var names = [];
      var length = $(this).get(0).files.length;
          for (var i = 0; i < $(this).get(0).files.length; ++i) {
              names.push($(this).get(0).files[i].name);
          }
          // $("input[name=file]").val(names);
          var fileName = names.join(', ');
          if(length>2){
            $(this).siblings(".custom-file-label").addClass("selected").html(length+" files selected");
          }
          else{
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
          }
 });
  }
  createName()
  // add more certificate
  $(document).on('click', '.cloney-certification-btn', function () {
    $(this).closest('.appendding_staff ').find('.cloney-certification  .appendding_content').clone()
      .appendTo($(this).closest('.appendding_staff').find('.appended_divs')).find('input , select').val('')
      .closest('.appendding_content').find(
        '.close-btn').removeClass('hidden').closest('.appendding_content').find('.custom-file-label').html(
        'choose file');
    createName()
  });
  $(document).on('click', '.close-btn', function () {
    $(this).closest('.appendding_content').remove();
  });
  $(document).on('click', '.cloney-project-btn', function () {
    $(this).closest('.appendding_staff ').find('.cloney-project  .appendding_project').clone()
      .appendTo($(this).closest('.appendding_staff').find('.appended_project')).find('input').val('')
      .closest('.appendding_project').find(
        '.close-project-btn').removeClass('hidden');
  });
  $(document).on('click', '.close-project-btn', function () {
    $(this).closest('.appendding_project ').remove();
  });
  // add more staff
  $(document).on('click', '.cloney-staff-btn', function () {
    $('.staff_content .appendding_staff').clone().appendTo('.appended_staff').find('input , select').val('')
      .closest('.appended_staff').find('.appended_divs').children().remove();
      $(this).closest('form').find('.appended_staff').find('.appended_project').children().remove();
    $(this).closest('form').find('.appended_staff .appendding_staff .custom-file-label').html(
      'choose file');
    createName();
    $(this).closest('form').find('.appended_staff .staff-close-btn').removeClass('hidden');
  });
  $(document).on('click', '.staff-close-btn', function () {
    $(this).closest('.appendding_staff').remove();
  });
  // change technical type
  $('#technical_Type').on('change', function () {
    var value = $(this).find('option:selected').val();
    if (value === '1') {
      $('.equipment_content').removeClass('hidden');
      $('.software_content').addClass('hidden');
    } else if (value === '2') {
      $('.equipment_content').addClass('hidden');
      $('.software_content').removeClass('hidden');
    }
  });
  // add more equipment
  $(document).on('click', '.cloney-equipment-btn', function () {
    $(this).closest('.equipment_content').find(' .equipment_cloney .appendding_equipment').clone().appendTo(
        '.appended_equipments').find('input , select , textarea').val('').siblings('.custom-file-label')
      .html(
        'choose file');
    createName();
    $(this).closest('form').find('.appended_equipments .appendding_equipment .equipment-close-btn')
      .removeClass(
        'hidden');
  });
  $(document).on('click', '.equipment-close-btn', function () {
    $(this).closest('.appendding_equipment').remove();
  });
  // add more software
  $(document).on('click', '.cloney-software-btn', function () {
    $(this).closest('.software_content').find(' .software_cloney .appendding_software').clone().appendTo(
      '.appended_softwares').find('input  , textarea').val('');
    $(this).closest('form').find('.appended_softwares .appendding_software .software-close-btn')
      .removeClass(
        'hidden');
  });
  $(document).on('click', '.software-close-btn', function () {
    $(this).closest('.appendding_software').remove();
  });
  // add more financial
  $(document).on('click', '.cloney-financial-btn', function () {
    $(this).closest('.financial_content').find(' .financial_cloney .appendding_financial').clone().appendTo(
        '.appended_financials').find('input').val('').siblings('.custom-file-label')
      .html(
        'choose file');
    createName();
    $(this).closest('form').find('.appended_financials .appendding_financial .financial-close-btn')
      .removeClass(
        'hidden');
  });
  $(document).on('click', '.financial-close-btn', function () {
    $(this).closest('.appendding_financial').remove();
  });
  // delete from table
  $(document).on('click', '.delete-file-btn', function () {
    $(this).closest('tr').remove();
  });
  // preview button 
  $(document).on('click', '.preview-btn', function () {
    $('.final_card').addClass('hidden');
    $('.preview_card').removeClass('hidden');

  });
  // edit button 
  $(document).on('click', '.edit-btn', function () {
    $('.final_card').removeClass('hidden');
    $('.preview_card').addClass('hidden');

  });
});
