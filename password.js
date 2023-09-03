let form = document.getElementById("btn-submit");
        let re_form = document.getElementById("btn-reset");


        form.addEventListener("click", (e) => {
            alert(`Your Details are Submitted`);
            e.preventDefault();

            let user_name = document.getElementById('name-box').value;
            let user_phone = document.getElementById('phone-box').value;
            let user_email = document.getElementById('email-box').value;

            localStorage.setItem(user_name, user_phone, user_email);

            document.getElementById('output').innerHTML = `The user has entered the following Details: <br> Username : ${user_name} <br> Phone-Number : ${user_phone} <br> Email-Id : ${user_email}`;
        });


        re_form.addEventListener("click", (e) => {
            re_form.reset();
        });


        let passwordarray = ["Lollipop", "SweetDarling", "SecretCode", "UnlimitedData", "FreeHearts",
            "DontRushThis", "DramaQueen", "PasswordKing", "IncognitoUser", "CameBackSoon", "TheSunIsOut",
            "Glad2BeBalling", "SugarCup", "LoveYouTooMuch", "Glad2BeAlive", "NeverSayNever", "EasterBunny",
            "HappyFamily", "BubbleGum", "CottonCandy", "SillyBee", "HoneyBee", "SweetPotato", "Mr.NiceGuy",
            "StayWithMe", "Porcupine", "BigHeart", "LoveYouForever", "CutePasswordUser", "FedoraDExplorer",
            "JustNukeIt", "NokiaConnectingPeople", "DragonMother", "DontSearchForThis", "CowboyKiller",
            "KentuckyFriedChicks", "LoveMyPopsicles", "WorksLikeACharm", "JonSnowWasHere", "MacLippies",
            "HakunaMatata", "FreezingFriends", "PlayBoy", "OreoCookies", "GuniessRecordHolder", "ChicagoBullsFan",
            "Mustang", "ShoppingOnEbay", "Giants", "DevilNinja", "ThunderBird", "HarleyDavidson", "Marlboro",
            "Diablo007", "MemorySucks", "NoMorePassword", "ColaNotPespi", "XeroxThis", "BreakingBad", "Submitteddata",
            "GoodPasswordsTaken", "EnterNewWifiName", "HotspotDown", "UserNotSecure"];


        // form.addEventListener("click", (e) => {

        //     let optionv = document.getElementById('enter_subject');


        //     if (optionv.value == "Funny-pass") {
        //         document.getElementById('pass').innerHTML = "Suggested Password : " + passwordarray[Math.floor(Math.random() * (passwordarray.length - 0) + 0)];
        //     }

        //     else {

        //         let chars = "abcdefghijklmnopqrstuvwxyz";
        //         let num = "0123456789";
        //         let special = "!@#$&?"

        //         let passss = "";
        //         let t = 3;
        //         while (t--) {
        //             passss += chars[Math.floor(Math.random() * (chars.length - 0) + 0)];
        //             passss += num[Math.floor(Math.random() * (num.length - 0) + 0)];
        //             passss += special[Math.floor(Math.random() * (special.length - 0) + 0)];
        //         }

        //         document.getElementById('pass').innerHTML = "Suggested Password : " + passss;
        //     }


        // });
        class mypassword{
            constructor(){
                console.log("Suggested Password : ");
            }
            generatefunny(){
                return passwordarray[Math.floor(Math.random() * (passwordarray.length - 0) + 0)];
            }
            genratestrong(){
                let chars = "abcdefghijklmnopqrstuvwxyz";
                        let num = "0123456789";
                        let special = "!@#$&?"
        
                        let passss = "";
                        let t = 3;
                        while (t--) {
                            passss += chars[Math.floor(Math.random() * (chars.length - 0) + 0)];
                            passss += num[Math.floor(Math.random() * (num.length - 0) + 0)];
                            passss += special[Math.floor(Math.random() * (special.length - 0) + 0)];
                        }
                        return passss;
            }

        }

        let p = new mypassword;
        form.addEventListener("click", (e) => {

                let optionv = document.getElementById('enter_subject');

                if (optionv.value == "Funny-pass") {
                    document.getElementById('pass').innerHTML ="Suggested Password : " + p.generatefunny();
                }
                else{
                    document.getElementById('pass').innerHTML ="Suggested Password : " + p.genratestrong();
                }
            });
