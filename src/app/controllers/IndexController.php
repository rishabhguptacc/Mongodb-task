<?php

use Phalcon\Mvc\Controller;


class IndexController extends Controller
{
    public function indexAction()
    {
        
        
    
    }

    public function searchBookAction()
    {
        // $text =  $this->request->getpost()['search'];
        $text =  $this->request->getpost('search');

        $text = strtolower($text);
        $brkText = explode(' ', $text);
        $urlFmt = implode('+', $brkText);



        // print_r($urlFmt);
        // $this->view->urlFmt = $urlFmt;

        $url = "https://openlibrary.org/search.json?q=".$urlFmt."&mode=ebooks&has_fulltext=true";
        
        // Initialize a CURL session.
        $ch = curl_init();

        //grab URL and pass it to the variable.
        curl_setopt($ch, CURLOPT_URL, $url);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        $response = curl_exec($ch);
        $response = json_decode($response);
        $this->view->response = $response;
        
        // print_r();
        // die;
    }

    public function bookDescriptionAction()
    {
        
        $isbn = $this->request->get('isbn');

        $url = "https://openlibrary.org/api/books?bibkeys=ISBN:".$isbn."&jscmd=details&format=json";

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
            
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        $response = curl_exec($ch);
        $response = json_decode($response);
        $this->view->response = $response;
    }
}

