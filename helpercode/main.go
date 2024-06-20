package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type EnrollmentRequest struct {
	CampaignID int    `json:"campaign_id"`
	Fname      string `json:"fname"`
	Mobile     interface{}  `json:"mobile"`
}

type UserInfo struct {
	UserID          string `json:"userID"`
	Fname           string `json:"fname"`
	AlternateMobile string `json:"alternate_mobile"`
	Mobile          *int64 `json:"mobile"` // Using pointer to allow null value
	Email           string `json:"email"`
	EmailOrignal    string `json:"email_orignal"`
	ReferCode       string `json:"referCode"`
	CustomValue     string `json:"customValue"`
	CustomValue2    string `json:"customValue2"`
	UniqueCode      string `json:"unique_code"`
}

type InvitesInfo struct {
	GmailInvitesCount       interface{} `json:"gmailInvitesCount"`
	FbShare                 interface{} `json:"fbShare"`
	FbMessage               interface{} `json:"fbMessage"`
	Linkedin                interface{} `json:"linkedin"`
	Pinterest               interface{} `json:"pinterest"`
	Sms                     interface{} `json:"sms"`
	Watsapp                 interface{} `json:"watsapp"`
	Telegram                interface{} `json:"telegram"`
	Zalo                    interface{} `json:"zalo"`
	Wechat                  int         `json:"wechat"`
	Qrcode                  int         `json:"qrcode"`
	Tweet                   interface{} `json:"tweet"`
	GPlus                   interface{} `json:"gPlus"`
	Native                  interface{} `json:"native"`
	ManualInvites           interface{} `json:"manualInvites"`
	ManualInvitesApp        interface{} `json:"manualInvites_app"`
	GmailApp                interface{} `json:"gmail_app"`
	FbShareApp              interface{} `json:"fbShare_app"`
	FbMessageApp            interface{} `json:"fbMessage_app"`
	SmsApp                  interface{} `json:"sms_app"`
	WatsappApp              interface{} `json:"watsapp_app"`
	TelegramApp             interface{} `json:"telegram_app"`
	TweetApp                interface{} `json:"tweet_app"`
	LinkedinApp             interface{} `json:"linkedin_app"`
	PinterestApp            interface{} `json:"pinterest_app"`
	GPlusApp                interface{} `json:"gPlus_app"`
	Contactsync             interface{} `json:"contactsync"`
	NativeApp               interface{} `json:"native_app"`
	ContactSyncEmail        interface{} `json:"contactSync_email"`
	ManualInvitesCount      interface{} `json:"manualInvitesCount"`
	ReferralLinkInvites     interface{} `json:"referral_link_invites"`
	ReferralLinkInvitesApp  interface{} `json:"referral_link_invites_app"`
}

type ReferralStats struct {
	TotalInvites    int         `json:"totalInvites"`
	Invites         InvitesInfo `json:"invites"`
	TotalClicks     interface{} `json:"totalClicks"`
	UniqueClicks    interface{} `json:"uniqueClicks"`
	TotalConverts   interface{} `json:"totalConverts"`
	PreConverts     interface{} `json:"preConverts"`
}

type EnrollmentResponse struct {
	UserInfo      UserInfo      `json:"userInfo"`
	ReferralStats ReferralStats `json:"referralStats"`
	Status        int           `json:"status"`
	Message       string        `json:"message"`
}

type ReferralStatsRequest struct {
	CampaignID interface{} `json:"campaign_id"`
	Email      string `json:"email"`
}

type ConvertItem struct {
	OrderID       string `json:"orderID"`
	Status        string `json:"status"`
	EventName     string `json:"event_name"`
	Email         string `json:"email"`
	Time          string `json:"time"`
	PurchaseValue string `json:"purchaseValue"`
	CustomValue   string `json:"customValue"`
	OrderRemark   string `json:"orderRemark"`
	RefereeEmail  string `json:"referee_email"`
	RefereeName   string `json:"referee_name"`
	RefereeMobile string `json:"referee_mobile"`
}

type ReferralStatsResponse struct {
	Email        string        `json:"email"`
	Name         string        `json:"name"`
	ReferCode    string        `json:"refer_code"`
	Mobile       string        `json:"mobile"`
	EnrollTime   string        `json:"enroll_time"`
	UserID       string        `json:"userID"`
	ReferralLink string        `json:"referral_link"`
	UniqueCode   string        `json:"unique_code"`
	Invites      interface{}   `json:"invites"`
	Clicks       interface{}   `json:"clicks"`
	Converts     interface{}   `json:"converts"`
	Status       int           `json:"status"`
	ConvertsList []ConvertItem `json:"convertsList"`
}

type RequestBody struct {
	ReferrerCode string `json:"referrer_code"`
	CampaignID   string `json:"campaign_id"`
}

type ReferrerDetails struct {
	ReferrerName       string `json:"referrer_name"`
	ReferrerEmail      string `json:"referrer_email"`
	ReferrerEmailOrg   string `json:"referrer_email_org"`
	ReferrerMobile     string `json:"referrer_mobile"`
	ReferrerCustomVal1 string `json:"referrer_custom_value_1"`
	ReferrerCustomVal2 string `json:"referrer_custom_value_2"`
}

type ResponseBody struct {
	Status          int             `json:"status"`
	Response        string          `json:"response"`
	Message         string          `json:"message"`
	ReferrerDetails ReferrerDetails `json:"referrer_details"`
}
type ResponseBodyError struct {
	Status  int    `json:"status"`
	Message string `json:"message"`
}

func main() {
	r := gin.Default()
	// Configure CORS
	corsConfig := cors.DefaultConfig()
	corsConfig.AllowOrigins = []string{"*"}
	corsConfig.AllowMethods = []string{"POST", "OPTIONS"}
	corsConfig.AllowHeaders = []string{"content-type", "x-api-key", "x-brand-id"}
	r.Use(cors.New(corsConfig))
	r.POST("/api/v1/conversion/confirm_referrer_code", handleConfirmReferrerCode)
	r.POST("api/v1/user/referral_stats", handleGetReferralStats)
	r.POST("/api/v1/user/enrollment", handleEnrollment)
	fmt.Println("Starting server on localhost:9090")
	err := r.Run(":9090")
	if err != nil {
		fmt.Println("Error starting server:", err)
		os.Exit(1)
	}
}

func handleConfirmReferrerCode(c *gin.Context) {
	// Read request body
	var reqBody RequestBody
	if err := c.ShouldBindJSON(&reqBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Error parsing request body: " + err.Error(),
		})
		return
	}

	// Prepare the request to the external API
	jsonBody, err := json.Marshal(reqBody)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error marshaling request body: " + err.Error(),
		})
		return
	}

	req, err := http.NewRequest("POST", "https://www.ref-r.com/api/v1/conversion/confirm_referrer_code", bytes.NewBuffer(jsonBody))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error creating HTTP request: " + err.Error(),
		})
		return
	}

	// Set the required headers
	req.Header.Set("accept", "application/json")
	req.Header.Set("content-type", "application/json")
	req.Header.Set("x-api-key", "506FE0BBE393F985B84A0350B64F0631")
	req.Header.Set("x-brand-id", "68573")

	// Create the HTTP client and send the request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error sending HTTP request: " + err.Error(),
		})
		return
	}
	defer resp.Body.Close()

	// Read the response body
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error reading response body: " + err.Error(),
		})
		return
	}

	// Unmarshal the response body
	// Unmarshal the response body
	var respBody ResponseBody
	if resp.StatusCode != 200 {
		respBodyErr := ResponseBodyError{}
		err = json.Unmarshal(body, &respBodyErr)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Error unmarshaling response body: " + err.Error(),
			})
			return
		}
		log.Default().Printf("response body %v", string(body))
		log.Default().Printf("response: %v", respBodyErr)
		c.JSON(resp.StatusCode, respBodyErr)
		return

	}
	err = json.Unmarshal(body, &respBody)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error unmarshaling response body: " + err.Error(),
		})
		return
	}

	// Return the response
	log.Default().Printf("response body %v", string(body))
	log.Default().Printf("response: %v", respBody)
	c.JSON(http.StatusOK, respBody)
}

func handleGetReferralStats(c *gin.Context) {
	var reqBody ReferralStatsRequest
	if err := c.ShouldBindJSON(&reqBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Error parsing request body: " + err.Error(),
		})
		return
	}

	jsonBody, err := json.Marshal(reqBody)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error marshaling request body: " + err.Error(),
		})
		return
	}

	req, err := http.NewRequest("POST", "https://www.ref-r.com/api/v1/user/referral_stats", bytes.NewBuffer(jsonBody))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error creating HTTP request: " + err.Error(),
		})
		return
	}

	// Set the required headers
	req.Header.Set("accept", "application/json")
	req.Header.Set("content-type", "application/json")
	req.Header.Set("x-api-key", "506FE0BBE393F985B84A0350B64F0631")
	req.Header.Set("x-brand-id", "68573")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error sending HTTP request: " + err.Error(),
		})
		return
	}
	defer resp.Body.Close()

	var respBody ReferralStatsResponse
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error reading response body: " + err.Error(),
		})
		return
	}

	if resp.StatusCode != 200 {
		respBodyErr := ResponseBodyError{}
		err = json.Unmarshal(body, &respBodyErr)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Error unmarshaling response body: " + err.Error(),
			})
			return
		}
		log.Default().Printf("response: %v", respBodyErr)
		c.JSON(resp.StatusCode, respBodyErr)
		return

	}

	err = json.Unmarshal(body, &respBody)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error unmarshaling response body: " + err.Error(),
		})
		return
	}

	// Return the response
	log.Default().Printf("response body %v", string(body))
	c.JSON(http.StatusOK, respBody)
}

func handleEnrollment(c *gin.Context) {
	var reqBody EnrollmentRequest
	if err := c.ShouldBindJSON(&reqBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Error parsing request body: " + err.Error(),
		})
		return
	}

	jsonData, err := json.Marshal(reqBody)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error marshaling request body: " + err.Error(),
		})
		return
	}

	apiURL := "https://www.ref-r.com/api/v1/user/enrollment"
	req, err := http.NewRequest("POST", apiURL, bytes.NewBuffer(jsonData))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error creating HTTP request: " + err.Error(),
		})
		return
	}

	req.Header.Set("accept", "application/json")
	req.Header.Set("content-type", "application/json")
	req.Header.Set("x-api-key", "506FE0BBE393F985B84A0350B64F0631")
	req.Header.Set("x-brand-id", "68573")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error sending HTTP request: " + err.Error(),
		})
		return
	}
	defer resp.Body.Close()

	var respBody EnrollmentResponse
	if resp.StatusCode != http.StatusOK {
		respBodyErr := map[string]interface{}{}
		if err := json.NewDecoder(resp.Body).Decode(&respBodyErr); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Error unmarshaling error response body: " + err.Error(),
			})
			return
		}
		c.JSON(resp.StatusCode, respBodyErr)
		return
	}

	if err := json.NewDecoder(resp.Body).Decode(&respBody); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error unmarshaling response body: " + err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, respBody)
}
