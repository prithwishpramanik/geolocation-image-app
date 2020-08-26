window.navigator.geolocation.getCurrentPosition(function(data){
        console.log(data);
        let latitude= data.coords.latitude;
        let longitude= data.coords.longitude;

        $.ajax({
            url: 'https://api.opencagedata.com/geocode/v1/json?q=%2022.5665+88.3662&key=67cbc6b9d30a49d1ad5be591e6ada880',
            success:function(data){
                console.log(data);
                let info=[];
                info.push(data.results[0].components.city);
                info.push(data.results[0].components.state);
                info.push(data.results[0].components.country);
                info.push(data.results[0].components.continent);
                $('#result').text(`${info[0]},${info[1]},${info[2]},${info[3]}`);
                for(let i=0;i<4;i++)
                {
                    for(let j=0;j<4;j++)
                    {
                        $.ajax({
                            url:'https://api.unsplash.com/photos/random?query='+ info[i][j] +'&client_id=3kf69-WQwRb-m2Zovh5JPmId8iSZQi-EApS73_3mdwE',
                            success:function(data){
                                console.log(data.urls.regular);
                                $('#display').append(`
                <div class="col-md-2">
                <div class="card">
                <img src="${data.urls.regular}"
                width:auto; height:50%;">
                </div>
                </div>
                `);
                            }
                        });
                    };
                };

            },
            error:function(){
                alert("error");
            }
        })
    });