// created by Oscar Johansson 2014-01-29
// Plugin is intended for my own use on this specific page.
// If you wan't it, you can use it as you wish!
(function($){

    $.fn.extend({

        dataBind: function(data) {

            $container = $(this);
            $template = $($container.html());
            $container.html('');

            format = function(val, formatter) {
                console.log(val);
                console.log(formatter);

                if (formatter === undefined)
                    return val;

                if (formatter === 'datetime')
                    return val.replace('T',' ').replace('Z','').substr(0,16);

                return val;
            };

            $(data).each(function(i, val) {

                $temp = $template.clone();
                for (var prop in val) {
                    var value = val[prop];
                    var $templateItem = $temp.find('[data-item="' + prop + '"]');
                    var formatter = $templateItem.data('formatter');

                    value = format(value, formatter);

                    $templateItem.html(value);
                }
                $temp.appendTo($container);
            });
        }



    });

})(jQuery);
