import cv2
import numpy 

cap=cv2.VideoCapture(0)

while True:
	ret,showcase=cap.read()
	cv2.imshow('showcase',showcase)
	cv2.imshow('showcase2',showcase)
	cv2.imshow('showcase3',showcase)
	cv2.imshow('showcase4',showcase)
	cv2.imshow('showcase5',showcase) #picshow
	if cv2.waitKey(20) & 0xFF==ord('q'):
		break
