 // Two Image Toggle
    function cycleImages(pageNumber) {
        var Image_Id = document.getElementById('getImage');

        switch (pageNumber) {
            case 1:
                //Toggle Between Personas on Shelter Seeker Page
                if (Image_Id.src.match('img/shelterseeker/mariagarcia_personajourney.webp')) {
                    Image_Id.src = 'img/shelterseeker/johnsmith_personajourney.webp';   
                } else {
                    Image_Id.src = 'img/shelterseeker/mariagarcia_personajourney.webp';
                }
                break;

            case 2:
                //Toggle Between Personas on Blossom and Bloom Page
                if (Image_Id.src.match('img/blossombloom/sarahwilson_personajourney.webp')) {
                    Image_Id.src = 'img/blossombloom/michaelpatel_personajourney.webp';   
                } else {
                    Image_Id.src = 'img/blossombloom/sarahwilson_personajourney.webp';
                }
                break;
            
            case 3:
                //Toggle Between Personas on Daves BBQ Page
                if (Image_Id.src.match('img/daves/davidgeer_personajourney.webp')) {
                    Image_Id.src = 'img/daves/alfredomoreno_personajourney.webp';   
                } else {
                    Image_Id.src = 'img/daves/davidgeer_personajourney.webp';
                }
                break;

            default:
                console.log("Please specify a valid page number.");
                break;
        }
    }