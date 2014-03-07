window.app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        $("button#btnScanCode").bind('click', this.doScan);
    },
    onDeviceReady: function() {
        $('span#lblDeviceState').text('Device Ready')
                .removeClass('label-default')
                .addClass('label-success');
    },
    doScan: function() {
        var $this = this;
        $('span#lblDeviceState').text('Scanning...')
                .removeClass('label-default')
                .addClass('label-danger');

        var txtOutput = $('h3#scanResultInput');
        txtOutput.text('');
        cordova.plugins.barcodeScanner.scan(
                function(result) {
                    $('span#lblDeviceState').text('Device Ready')
                            .removeClass('label-danger')
                            .addClass('label-success');
                    txtOutput.text(result.text);
                },
                function(error) {
                    navigator.notification.alert(
                            error, // message
                            $this.onScanErrorAlertDismissed, // callback
                            'Barcode Scanner', // title
                            'Done'                  // buttonName
                            );
                }
        );
    },
    onScanErrorAlertDismissed:function(){
        
    }
};