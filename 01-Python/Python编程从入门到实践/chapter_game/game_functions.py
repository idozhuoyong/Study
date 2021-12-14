import sys
import pygame

def check_event(ship):
    """ 响应按键和鼠标时间 """
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_RIGHT:
                # 向右移动
                ship.moving_right = True
            elif event.key == pygame.K_LEFT:
                # 向左移动
                ship.moving_left = True
        elif event.type == pygame.KEYUP:
            if event.key == pygame.K_RIGHT:
                # 结束向右移动
                ship.moving_right = False
            elif event.key == pygame.K_LEFT:
                # 结束向左移动
                ship.moving_left = False
    
def update_screen(ai_settings, screen, ship):
    """ 更新屏幕上的图像，并切换到新图像 """
    # 重新绘制屏幕
    screen.fill(ai_settings.bg_color) # 填充背景颜色
    ship.blitme()

    # 让最近绘制的屏幕可见
    pygame.display.flip()