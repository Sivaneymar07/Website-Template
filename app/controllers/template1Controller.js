app.controller('template1Controller', function($scope) {
       
    $scope.myvalue1= true;
    $scope.myvalue2 = false;
    $scope.myvalue3 = false;
    $scope.myvalue3 = false;

    
    $scope.showAlert1 = function(){
      $scope.myvalue1 = true;
      $scope.myvalue2 = false;
       $scope.myvalue3 = false;
       $scope.myvalue4 = false;
    };
     $scope.showAlert2 = function(){
      $scope.myvalue2 = true;
       $scope.myvalue1 = false;
        $scope.myvalue3 = false;
        $scope.myvalue4 = false;
      
    };
     $scope.showAlert3 = function(){
      $scope.myvalue2 = false;
       $scope.myvalue1 = false;
        $scope.myvalue3 = true;
        $scope.myvalue4 = false;
      
    }; 
     $scope.showAlert4 = function(){
      $scope.myvalue2 = false;
       $scope.myvalue1 = false;
        $scope.myvalue3 = false;
        $scope.myvalue4 = true;
      
    }; 
});

