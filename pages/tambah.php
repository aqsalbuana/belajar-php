<?php

require "koneksi.php";
class Product {
    private $koneksi;
    private $product_name;
    private $category_id;
    private $product_code;
    private $description;
    private $price;
    private $unit;
    private $discount_amount;
    private $stock;
    private $directory;
    private $image;
    private $allowTypes;
    private $statusMsg;
    private $errorMsg;
    private $insertValuesSQL;
    private $errorUpload;
    private $errorUploadType;
    private $fileNames;

    public function __construct($koneksi) {
        $this->koneksi = $koneksi;
        $this->directory = "../assets/images/";
        $this->allowTypes = array('jpg','png','jpeg','gif');
        $this->statusMsg = "";
        $this->errorMsg = "";
        $this->insertValuesSQL = "";
        $this->errorUpload = "";
        $this->errorUploadType = "";
        $this->fileNames = array_filter($_FILES['image']['name']);
    }

    public function setProductName($product_name) {
        $this->product_name = $product_name;
    }

    public function setCategoryId($category_id) {
        $this->category_id = $category_id;
    }

    public function setProductCode($product_code) {
        $this->product_code = $product_code;
    }

    public function setDescription($description) {
        $this->description = $description;
    }

    public function setPrice($price) {
        $this->price = $price;
    }

    public function setUnit($unit) {
        $this->unit = $unit;
    }

    public function setDiscountAmount($discount_amount) {
        $this->discount_amount = $discount_amount;
    }

    public function setStock($stock) {
        $this->stock = $stock;
    }

    public function setImage($image) {
        $this->image = $image;
    }

    public function uploadImage() {
        if(!empty($this->fileNames)){ 
            foreach($_FILES['image']['name'] as $key=>$val){ 
                $fileName = basename($_FILES['image']['name'][$key]); 
                $targetFilePath = $this->directory . $fileName; 
                 
                $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION); 
                if(in_array($fileType, $this->allowTypes)){ 
                    if(move_uploaded_file($_FILES["image"]["tmp_name"][$key], $targetFilePath)){ 
                        $this->insertValuesSQL .= "$fileName "; 
                    }else{ 
                        $this->errorUpload .= $_FILES['image']['name'][$key].' | '; 
                    } 
                }else{ 
                    $this->errorUploadType .= $_FILES['image']['name'][$key].' | '; 
                } 
            }
              
            $this->errorUpload = !empty($this->errorUpload)?'Upload Error: '.trim($this->errorUpload, ' | '):''; 
            $this->errorUploadType = !empty($this->errorUploadType)?'File Type Error: '.trim($this->errorUploadType, ' | '):''; 
            $this->errorMsg = !empty($this->errorUpload)?'<br/>'.$this->errorUpload.'<br/>'.$this->errorUploadType:'<br/>'.$this->errorUploadType;  
             
            if(!empty($this->insertValuesSQL)){ 
                $this->insertValuesSQL = trim($this->insertValuesSQL);  
                $insert = $this->koneksi->query("INSERT INTO products (product_name, category_id, product_code, description, 
                price, unit, discount_amount, stock, image) VALUES ('$this->product_name', '$this->category_id', 
                '$this->product_code', '$this->description', '$this->price', '$this->unit', '$this->discount_amount', '$this->stock', '$this->insertValuesSQL')"); 
                if($insert){ 
                    $this->statusMsg = "Files are uploaded successfully.".$this->errorMsg; 
                }else{ 
                    $this->statusMsg = "Sorry, there was an error uploading your file."; 
                } 
            }else{ 
                $this->statusMsg = "Upload failed! ".$this->errorMsg; 
            }
        }else{ 
            $this->statusMsg = 'Please select a file to upload.'; 
        }
    }

    public function redirectTo($page) {
        header("Location: $page");
    }

    public function addProduct() {
        if (isset($_POST['tambah'])) {
            $this->setProductName($_POST['product_name']);
            $this->setCategoryId($_POST['category_id']);
            $this->setProductCode($_POST['product_code']);
            $this->setDescription($_POST['description']);
            $this->setPrice($_POST['price']);
            $this->setUnit($_POST['unit']);
            $this->setDiscountAmount($_POST['discount_amount']);
            $this->setStock($_POST['stock']);
            $this->setImage($_FILES['image']['name']);

            $this->uploadImage();

            $this->redirectTo('crudproduk.php');
        }
    }
}

$product = new Product($koneksi);
$product->addProduct();







?>