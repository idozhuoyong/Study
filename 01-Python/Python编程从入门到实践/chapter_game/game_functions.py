import sys
import pygame

def check_event():
    """ 响应按键和鼠标时间 """
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()
    
def update_screen(ai_settings, screen, ship):
    """ 更新屏幕上的图像，并切换到新图像 """
    # 重新绘制屏幕
    screen.fill(ai_settings.bg_color) # 填充背景颜色
    ship.blitme()

    # 让最近绘制的屏幕可见
    pygame.display.flip()