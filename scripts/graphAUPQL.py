import matplotlib.pyplot as plt
import numpy as np
x = np.arange(8)
y1 = [6.34, 5.9848, 7.5708, 5.5927, 5.754, 6.3096, 15.445, 6.761169]
y2 = [19.02, 15.09, 22.04, 19.415, 17.71, 8.615, 28.365, 13.82]
labels = ["Sydney", "Melbourne", "Brisbane", "Adelaide", "Perth", "Hobart", "Darwin", "Canberra"]
width = 0.4
plt.title("The Effect of Temperature on Physical Quality of Life In Cities Across the Australia")
plt.bar(x+width/2, y1, width)
plt.bar(x+width/1, y2, width)
plt.xticks(x, labels)
plt.xlabel("Location")
plt.ylabel("Temperature(orange degrees celsius), PQL Index (blue)")
plt.show()