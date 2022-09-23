$(document).ready(function () {
    function readImage ( input ) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          // console.log(e.target.result);
          // console.log($('#preview'));

          console.log(input.files[0].name);
          console.log(document.querySelector('.file-upload-wrapper'));

          document.querySelector('.file-upload-wrapper').setAttribute('data-text', input.files[0].name);
          

            
          // console.log("Опа ", e.target);

          console.log(e.target.result);


          img = editImage(e.target.result);
 

        $('.image-preview').text('');

          $('.image-preview').css('background-image', `url(${e.target.result})`)
          console.log(img);

        }

        let parent = document.querySelector('.answer');
        // console.log(parent);
        let text = 'dsf';
        // parent.innerHTML = "Вот здесь надо пытаться поправить";

        reader.readAsDataURL(input.files[0]);
      }
      // print('Помогите');
    }

    let img = new Image ();
    function editImage(ssilka) {
      let img = new Image ();
      img.src = ssilka;

      console.log(img.src);
      console.log(img);

      console.log(img.width);
      console.log(img.height);
      if (img.width != 300){
        var help = img.width;
        img.width = 300;
        img.height = img.height / (help / 300)
      }
      if (img.height > 200){
        var help = img.height;
        img.height = 200;
        img.width = img.width / (help / 200);
      }
      return img;
    }

    function printMessage(destination, msg) {

      $(destination).removeClass();

      if (msg == 'success') {
        $(destination).addClass('alert alert-success').text('Файл успешно загружен.');
      }

      if (msg == 'error') {
        $(destination).addClass('alert alert-danger').text('Произошла ошибка при загрузке файла.');
      }

    }

    $('#image').change(function(){
      readImage(this);
    });





    $('#img').on('submit', (function(e) {
        let isLoad = false
        $('.answer').text('');
        $('#item').css('display', 'block')


        

        /*
        $('#login-box a:hover').css('background', 'none');
        $('#login-box a:hover').css('color', '#03e9f4');
        $('#login-box a:hover').css('box-shadow', 'none');
        */
        // $('#login-box a:hover').css('');
        // $('#login-box').attr('style', '')
        $("#login-box").addClass("closethis")
        $("#login-box").removeClass("openthis")
        $("#submit").addClass("custom2")
        $("#submit").removeClass("custom")
        $(".file-upload-wrapper").addClass("helpforuploadwrapper2")
        $(".file-upload-wrapper").removeClass("helpforuploadwrapper")





      e.preventDefault();
      // print(e);
      // console.log('Помогите');
      if (isLoad) return
      isLoad = true

      $('#submit',).attr('disabled', '')


      console.log("Жопочкаф")
      console.log(e);

      var formData = new FormData(document.getElementById('upload-image'), document.getElementById('img1'));
      $('#image').attr('disabled', '')

      printMessage(formData);

    $.ajax({


    type:'POST', // Тип запроса
    url: 'http://127.0.0.1:8000/upload/', // Скрипт обработчика
    data: formData, // Данные которые мы передаем
    cache: false, // В запросах POST отключено по умолчанию, но перестрахуемся
    contentType: false, // Тип кодирования данных мы задали в форме, это отключим
    processData: false, // Отключаем, так как передаем файл

    success: function(json) {
      document.querySelector('.answer').innerHTML = json['image_result'];
      isload = false;
      $('#submit').removeAttr('disabled');
      $('#image').removeAttr('disabled');

      $('#item').css('display', 'none');

      $("#login-box").addClass("openthis")
        $("#login-box").removeClass("closethis")
        $("#submit").addClass("custom")
        $("#submit").removeClass("custom2")
        $(".file-upload-wrapper").addClass("helpforuploadwrapper")
        $(".file-upload-wrapper").removeClass("helpforuploadwrapper2")
    }

    });



    }));

  });