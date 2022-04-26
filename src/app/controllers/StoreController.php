<?php

use Phalcon\Mvc\Controller;
use MongoDB\BSON\ObjectId;
// use GuzzleHttp\Client;

class StoreController extends Controller
{

    public function indexAction()
    {
        // echo "inside store!";
    }
   
    public function addProductAction()
    {
        $data = $this->request->get();
        // print_r($data['metaLabel'][0]);
        $metaLabels = [];
        foreach ($data['metaLabel'] as $metaLabel) {
            array_push($metaLabels, $metaLabel);
        }

        $metaValues = [];
        foreach ($data['metaValue'] as $metaValue) {
            array_push($metaValues, $metaValue);
        }
        $metaFields = array_combine($metaLabels, $metaValues);
        
        $variationNames = [];
        foreach ($data['variationName'] as $v) {
            array_push($variationNames, $v);
        }

        $variationValues = [];
        foreach ($data['variationValue'] as $v) {
            array_push($variationValues, $v);
        }

        $variations = [];

        for ($i = 0; $i < count($variationNames); $i++) {
            array_push($variations, array_combine($variationNames[$i], $variationValues[$i]));
        }
        
        for ($i = 0; $i < count($variationNames); $i++) {
            $variations[$i]['price'] = $data['variationPrice'][$i];
        }
        
        $this->view->data = $data;
        $this->view->metaFields = $metaFields;
        $this->view->variations = $variations;
        
        $formData = [
            'Name' => $data['name'],
            'Category' => $data['category'],
            'Price' => $data['price'],
            'Stock' => $data['stock'],
            'Meta Fields' => $metaFields,
            'Variations' => $variations,
        ];

        if (
            $formData['Name'] != null && $formData['Category'] != null && $formData['Price'] != null && $formData['Stock'] != null &&
            $formData['Name'] != "" && $formData['Category'] != "" && $formData['Price'] != "" && $formData['Stock'] != ""
        ) {
            $this->mongo->products->insertOne($formData);
        }

        
        // echo "<pre>";
        // print_r($formData);
        // die;
    }

    public function updateProductAction()
    {
        $id = $_GET['id'];
        $product =  $this->mongo->products->findOne(['_id' => new ObjectId($id)]);
        $this->view->product = $product;

        // print_r($id);
    }

    public function updatedProductAction()
    {
        $id = $_GET['id'];
        $data = $this->request->get();
        // print_r($data['metaLabel'][0]);
        $metaLabels = [];
        foreach ($data['metaLabel'] as $metaLabel) {
            array_push($metaLabels, $metaLabel);
        }

        $metaValues = [];
        foreach ($data['metaValue'] as $metaValue) {
            array_push($metaValues, $metaValue);
        }
        $metaFields = array_combine($metaLabels, $metaValues);
        
        $variationNames = [];
        foreach ($data['variationName'] as $v) {
            array_push($variationNames, $v);
        }

        $variationValues = [];
        foreach ($data['variationValue'] as $v) {
            array_push($variationValues, $v);
        }

        $variations = [];

        for ($i = 0; $i < count($variationNames); $i++) {
            array_push($variations, array_combine($variationNames[$i], $variationValues[$i]));
        }
        
        for ($i = 0; $i < count($variationNames); $i++) {
            $variations[$i]['price'] = $data['variationPrice'][$i];
        }
        
        $this->view->data = $data;
        $this->view->metaFields = $metaFields;
        $this->view->variations = $variations;
        
        $formData = [
            'Name' => $data['name'],
            'Category' => $data['category'],
            'Price' => $data['price'],
            'Stock' => $data['stock'],
            'Meta Fields' => $metaFields,
            'Variations' => $variations,
        ];

        if (
            $formData['Name'] != null && $formData['Category'] != null && $formData['Price'] != null && $formData['Stock'] != null &&
            $formData['Name'] != "" && $formData['Category'] != "" && $formData['Price'] != "" && $formData['Stock'] != ""
        ) {
            $this->mongo->products->replaceOne(['_id' => new ObjectId($id)], $formData);
        }
        $this->response->redirect('store/products');

    }



    public function deleteProductAction()
    {
        $id = $_GET['id'];
        $this->mongo->products->deleteOne(["_id" => new ObjectId($id)]);
        $this->response->redirect('store/products');
        // print_r($id);
    }

    public function productsAction()
    {
        $products = $this->mongo->products->find()->toArray();

        $this->view->products = $products;
    }


    public function ordersAction()
    {
        
    }

    public function addOrderAction()
    {
        
    }
}
