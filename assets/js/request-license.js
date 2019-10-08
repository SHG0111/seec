// Add the following code if you want the name of the file appear on select
$(document).ready(function () {
  function createName() {

    $(document).find(".custom-file-input").on('change', function(){
      var names = [];
      var length = $(this).get(0).files.length;
          for (var i = 0; i < $(this).get(0).files.length; ++i) {
              names.push($(this).get(0).files[i].name);
          }
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
