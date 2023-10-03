<?php
$poster1 = "Poster Monkey D. Luffy";
		$keterangan1 = "For More Info";
		$harga1 = "Rp 20.000";

        $poster2 = "Poster Roronoa Zoro";
		$keterangan2 = "For More Info";
		$harga2 = "Rp 20.000";

        $poster3 = "Poster Nami";
		$keterangan3 = "For More Info";
		$harga3 = "Rp 20.000";

        $poster4 = "Poster Usopp";
		$keterangan4 = "For More Info";
		$harga4 = "Rp 20.000";

        $poster5 = "Poster Sanji" ;
		$keterangan5 = "For More Info";
		$harga5 = "Rp 20.000";

        $poster6 = "Poster Chopper" ;
		$keterangan6 = "For More Info";
		$harga6 = "Rp 20.000";

        $poster7 = "Poster Robin" ;
		$keterangan7 = "For More Info";
		$harga7 = "Rp 20.000";

        $poster8 = "Poster Franky" ;
		$keterangan8 = "For More Info";
		$harga8 = "Rp 20.000";
?>


<!DOCTYPE html>
<html>
    <head>
        <title>Our Product</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale-1.0">
        <link rel="stylesheet" href="assets/css/product.css">
    </head>

    <body class="poster">
        <h1>Daftar Harga poster</h1>
        <div class="center">
            <div class="menu">
                <div class="kolom">
                    <div class="card1">
                        <img src="assets/images/luffy.jpg" style="width: 5%;">
                        <h2><?php echo $poster1; ?></h2>
                        <p><?php echo $keterangan1; ?></p>
                        <h2><?php echo $harga1; ?></h2>
                    </div>
                </div>

                <div class="kolom">
                    <div class="card2">
                        <img src="assets/images/zoro.jpg" style="width: 5%;">
                        <h2><?php echo $poster2; ?></h2>
                        <p><?php echo $keterangan2; ?></p>
                        <h2><?php echo $harga2; ?></h2>
                    </div>
                </div>

                <div class="kolom">
                    <div class="card3">
                        <img src="assets/images/nami.jpg" style="width: 5%;">
                        <h2><?php echo $poster3; ?></h2>
                        <p><?php echo $keterangan3; ?></p>
                        <h2><?php echo $harga3; ?></h2>
                    </div>
                </div>

                <div class="kolom">
                    <div class="card4">
                        <img src="assets/images/usopp.jpg" style="width: 5%;">
                        <h2><?php echo $poster4; ?></h2>
                        <p><?php echo $keterangan4; ?></p>
                        <h2><?php echo $harga4; ?></h2>
                    </div>
                </div>

                <div class="kolom">
                    <div class="card5">
                        <img src="assets/image/sanji.jpg" style="width: 5%;">
                        <h2><?php echo $poster5; ?></h2>
                        <p><?php echo $keterangan5; ?></p>
                        <h2><?php echo $harga5; ?></h2>

                    </div>
                </div>

                <div class="kolom">
                    <div class="card6">
                        <img src="assets/images/chopper.jpg" style="width: 5%;">
                        <h2><?php echo $poster6; ?></h2>
                        <p><?php echo $keterangan6; ?></p>
                        <h2><?php echo $harga6; ?></h2>
                    </div>
                </div>

                <div class="kolom">
                    <div class="card7">
                        <img src="assets/images/robin.jpg" style="width: 5%;">
                        <h2><?php echo $poster7; ?></h2>
                        <p><?php echo $keterangan7; ?></p>
                        <h2><?php echo $harga7; ?></h2>
                    </div>
                </div>

                <div class="kolom">
                    <div class="card8">
                        <img src="assets/images/franky.jpg" style="width: 5%;">
                        <h2><?php echo $poster8; ?></h2>
                        <p><?php echo $keterangan8; ?></p>
                        <h2><?php echo $harga8; ?></h2>

                    </div>
                </div>
            </div>
        </div>
    </body>
</html>

