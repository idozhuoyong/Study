import sys
import pygame

def check_event():
    """ 响应按键和鼠标时间 """
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()