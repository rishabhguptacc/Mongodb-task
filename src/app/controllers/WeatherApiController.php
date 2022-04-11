<?php

use Phalcon\Mvc\Controller;
use GuzzleHttp\Client;

class WeatherApiController extends Controller
{

    public function indexAction()
    {
        // echo "inside WeatherApi!";
    }

    // public function weatherCurlAction()
    // {
    //     $search = $this->request->getPost('search');
    //     $search = strtolower($search);
    //     $sArr = explode(' ', $search);
    //     $urlFmt = implode('%20', $sArr);

    //     // print_r($urlFmt); die;

    //     $url = "https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=".$urlFmt."&aqi=yes";

    //     $ch = curl_init();

    //     curl_setopt($ch, CURLOPT_URL, $url);
    //     curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        
    //     $response = curl_exec($ch);
    //     $response = json_decode($response);
    //     // echo  "<pre>";
    //     // print_r($response); die;

    //     $this->view->response = $response;
    // }


    public function weatherGuzzleAction()
    {
        $search = $this->request->getPost('search');
        $search = strtolower($search);
        $sArr = explode(' ', $search);
        $urlFmt = implode('%20', $sArr);
       
        // print_r($urlFmt); die;
        // $fullUrl = "https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=".$urlFmt."&aqi=yes";
        $fullUrl = "http://api.weatherapi.com/v1/search.json?key=0bab7dd1bacc418689b143833220304&q=".$urlFmt;
        $client = new Client();
        
        $response = json_decode($client->request('GET', $fullUrl)->getBody(), true);
        // $decodedResponse = json_decode($response);
        // echo $response;
        // echo "<pre>";
        // print_r($response);
        // die;
        
        // $rHalfUrl = "v1/current.json?key=0bab7dd1bacc418689b143833220304&q=".$urlFmt."&aqi=yes";

        // $this->view->response = $response;
        $this->view->response = $response;


    }

    public function detailWeatherAction()
    {
        
        $name = $_GET['name'];

        $search = strtolower($name);
        $sArr = explode(' ', $search);
        $urlFmt = implode('%20', $sArr);
        $fullUrl = "https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=".$urlFmt."&aqi=yes";
        $client = new Client();
        
        $response = json_decode($client->request('GET', $fullUrl)->getBody(), true);
        $this->view->response = $response;

    }

    public function forecastAction()
    {
        $name = $_GET['name'];

        $search = strtolower($name);
        $sArr = explode(' ', $search);
        $urlFmt = implode('%20', $sArr);
        $fullUrl = "http://api.weatherapi.com/v1/forecast.json?key=0bab7dd1bacc418689b143833220304&q=".$urlFmt."&days=1&aqi=no&alerts=no";
        $client = new Client();
        
        $response = json_decode($client->request('GET', $fullUrl)->getBody(), true);
        $this->view->response = $response;
    }

    public function historyAction()
    {
        // echo "forecast"; die;
        $name = $_GET['name'];

        // $search = strtolower($name);
        // $sArr = explode(' ', $search);
        // $urlFmt = implode('%20', $sArr);
        // $fullUrl = "http://api.weatherapi.com/v1/history.json?key=0bab7dd1bacc418689b143833220304&q=".$urlFmt."&dt=2022-03-01";
        // $client = new Client();
        $this->view->name = $name;
        // $response = json_decode($client->request('GET', $fullUrl)->getBody(), true);
        // $this->view->response = $response;
    }

    public function timeZoneAction()
    {
        // echo "forecast"; die;
    }

    public function sportsAction()
    {
        // echo "forecast"; die;
    }

    public function astronomyAction()
    {
        // echo "forecast"; die;
        $name = $_GET['name'];

        $search = strtolower($name);
        $sArr = explode(' ', $search);
        $urlFmt = implode('%20', $sArr);
        $fullUrl = "http://api.weatherapi.com/v1/astronomy.json?key=0bab7dd1bacc418689b143833220304&q=".$urlFmt."&dt=2022-04-08";
        $client = new Client();
        
        $response = json_decode($client->request('GET', $fullUrl)->getBody(), true);
        $this->view->response = $response;
    }

    public function weatherAlertsAction()
    {
        echo "forecast"; die;
    }

    public function airQualityAction()
    {
        echo "forecast"; die;
    }
}
